<img src="http://getkirby.com/assets/images/github/plainkit.jpg" width="300">

**Kirby: the CMS that adapts to any project, loved by developers and editors alike.**
The Plainkit is a minimal Kirby setup with the basics you need to start a project from scratch. It is the ideal choice if you are already familiar with Kirby and want to start step-by-step.

You can learn more about Kirby at [getkirby.com](https://getkirby.com).

### Try Kirby for free

You can try Kirby and the Plainkit on your local machine or on a test server as long as you need to make sure it is the right tool for your next project. … and when you’re convinced, [buy your license](https://getkirby.com/buy).

### Get going

Read our guide on [how to get started with Kirby](https://getkirby.com/docs/guide/quickstart).

You can [download the latest version](https://github.com/getkirby/plainkit/archive/main.zip) of the Plainkit.
If you are familiar with Git, you can clone Kirby's Plainkit repository from Github.

    git clone https://github.com/getkirby/plainkit.git

## What's Kirby?

-   **[getkirby.com](https://getkirby.com)** – Get to know the CMS.
-   **[Try it](https://getkirby.com/try)** – Take a test ride with our online demo. Or download one of our kits to get started.
-   **[Documentation](https://getkirby.com/docs/guide)** – Read the official guide, reference and cookbook recipes.
-   **[Issues](https://github.com/getkirby/kirby/issues)** – Report bugs and other problems.
-   **[Feedback](https://feedback.getkirby.com)** – You have an idea for Kirby? Share it.
-   **[Forum](https://forum.getkirby.com)** – Whenever you get stuck, don't hesitate to reach out for questions and support.
-   **[Discord](https://chat.getkirby.com)** – Hang out and meet the community.
-   **[Mastodon](https://mastodon.social/@getkirby)** – Spread the word.
-   **[Bluesky](https://bsky.app/profile/getkirby.com)** – Spread the word.

---

© 2009 Bastian Allgeier
[getkirby.com](https://getkirby.com) · [License agreement](https://getkirby.com/license)


bloque "video autoplay"
- theme:
    - lumineux
    - sombre
    - coloré variante 1
    - coloré variante 2
- field text: titre 
- field writer: text de description
- field fichier: fichier mp4
- field writer: texte de video description, pas de nodes, et pas de marks
- information CTA:
  - un champs text qui vérifie si c'est bien formaté comme un URL
  - un champs text pour le titre du bouton

bloque "liste de liens"
- theme:
  - lumineux
  - sombre
  - coloré variante 1
  - coloré variante 2
- field text: titre
- field writer: text de description
- field structure:
  - field file: image cover (max 1 fiels)
  - field text: titre
  - field writer: description
  - field tag
- information CTA:
    - un champs text qui vérifie si c'est bien formaté comme un URL
    - un champs text pour le titre du bouton
    
bloque "CTA"
- theme:
    - lumineux
    - sombre
    - coloré variante 1
    - coloré variante 2
- titre
- field writer: text de description
- information CTA:
    - un champs text qui vérifie si c'est bien formaté comme un URL
    - un champs text pour le titre du bouton

bloque "video"
- theme:
    - lumineux
    - sombre
    - coloré variante 1
    - coloré variante 2
- field text: titre
- field writer: text de description
- field video: youtube ou vimeo
- information CTA:
    - un champs text qui vérifie si c'est bien formaté comme un URL
    - un champs text pour le titre du bouton

bloque "image"
- theme:
    - lumineux
    - sombre
    - coloré variante 1
    - coloré variante 2
- field text: titre
- field writer: text de description
- field file: image, max 1
- information CTA:
    - un champs text qui vérifie si c'est bien formaté comme un URL
    - un champs text pour le titre du bouton
    
bloque "iFrame"
- theme:
    - lumineux
    - sombre
    - coloré variante 1
    - coloré variante 2
- field text: titre
- field writer: text de description
- field text: un champs text qui vérifie si c'est bien formaté comme un URL

bloque "contenu"
- theme:
    - lumineux
    - sombre
    - coloré variante 1
    - coloré variante 2
- field text: titre
- field writer: text de description
- information CTA:
    - un champs text qui vérifie si c'est bien formaté comme un URL
    - un champs text pour le titre du bouton

bloque "toggle"
- theme:
    - lumineux
    - sombre
    - coloré variante 1
    - coloré variante 2
- field text: titre
- field writer: text de description
- field structure:
    - field text: titre
    - field writer: description
    - field writer: content
  
