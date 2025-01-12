import requests
from bs4 import BeautifulSoup

def scrape_html_part(url, target_classes):
    """
    Scrape une page web et retourne le HTML d'une partie spécifique de la page
    en fonction des classes CSS.

    :param url: URL de la page web à scraper
    :param target_classes: Liste des classes CSS de l'élément cible
    :return: HTML de l'élément trouvé, ou message d'erreur si aucun élément trouvé
    """
    try:
        # Télécharge le contenu de la page
        response = requests.get(url)
        response.raise_for_status()  # Vérifie que la requête a réussi
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Génère le sélecteur CSS basé sur les classes fournies
        css_selector = '.'.join(target_classes)
        element = soup.select_one(f'.{css_selector}')
        
        if element:
            return element.prettify()  # Retourne le HTML formaté
        else:
            return f"Aucun élément trouvé avec les classes {target_classes}."
    except requests.exceptions.RequestException as e:
        return f"Erreur lors de la requête : {e}"
    except Exception as e:
        return f"Erreur inattendue : {e}"

# Exemple d'utilisation
if __name__ == "__main__":
    url = "https://nextjs.org/docs"  # Remplacez par l'URL de votre choix
    classes = ["prose", "prose-vercel", "max-w-none"]  # Remplacez par les classes cibles
    html_part = scrape_html_part(url, classes)
    print(html_part)
