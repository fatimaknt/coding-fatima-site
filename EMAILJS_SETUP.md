# Configuration EmailJS pour l'envoi d'emails

## Étapes pour configurer EmailJS

### 1. Créer un compte EmailJS
- Allez sur [emailjs.com](https://www.emailjs.com/)
- Créez un compte gratuit
- Vérifiez votre email

### 2. Configurer un service email
- Dans votre dashboard EmailJS, allez dans "Email Services"
- Cliquez sur "Add New Service"
- Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
- Suivez les instructions pour connecter votre compte email
- Notez le **Service ID** généré

### 3. Créer un template d'email
- Allez dans "Email Templates"
- Cliquez sur "Create New Template"
- Utilisez ce template :

```html
Nouveau message de {{from_name}}

Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact de Coding Fatima.
```

- Sauvegardez le template
- Notez le **Template ID** généré

### 4. Obtenir votre clé publique
- Allez dans "Account" > "API Keys"
- Copiez votre **Public Key**

### 5. Mettre à jour le code
Dans le fichier `src/pages/Contact.tsx`, remplacez :c'est ceci 

```javascript
// Ligne 15
emailjs.init("YOUR_PUBLIC_KEY"); // Remplacez par votre clé publique

// Lignes 42-46
const result = await emailjs.send(
  'YOUR_SERVICE_ID', // Remplacez par votre Service ID
  'YOUR_TEMPLATE_ID', // Remplacez par votre Template ID
  templateParams
);
```

### 6. Tester
- Redémarrez votre serveur de développement
- Testez l'envoi d'un message depuis le formulaire de contact
- Vérifiez que vous recevez bien l'email

## Variables disponibles dans le template
- `{{from_name}}` : Nom de l'expéditeur
- `{{from_email}}` : Email de l'expéditeur
- `{{subject}}` : Sujet du message
- `{{message}}` : Contenu du message
- `{{to_name}}` : Nom du destinataire (Coding Fatima)

## Plan gratuit EmailJS
- 200 emails par mois
- 2 services email
- Templates illimités
- Support par email

## Alternative : Formspree
Si vous préférez une solution plus simple, vous pouvez utiliser Formspree :
1. Allez sur [formspree.io](https://formspree.io/)
2. Créez un compte
3. Créez un nouveau formulaire
4. Remplacez l'action du formulaire par l'URL fournie par Formspree 