# **Validate Template**

A comprehensive web platform designed for new product validation, fully driven by the Prismic headless CMS.

### **Live Demo**

[View Live Site](https://validate-template.web.app/)

### **Content Management**

[Prismic CMS Dashboard](https://validate-template.prismic.io/)

## **Technologies Used**

- React.js
- Firebase Hosting
- Prismic CMS

## **Features Pending Implementation**

- Integration with Mailchimp.
- Resolution of mobile styling discrepancies.
- Refactoring `App.js` for component reusability.

## **Local Development Setup**

Follow these steps to set up your local environment:

1. Rename `.env.template` to `.env` and populate the necessary environment variables.
2. Install dependencies:

```bash
   npm install
```

3. Run the project:

```bash
   npm run start
```

## **Deployment to Firebase Hosting**

Ensure you're authenticated with Firebase CLI. Then:

1. Build the project:

```bash
   npm run build
```

2. Deploy to Firebase Hosting:

```bash
   firebase deploy --only hosting
```

## **Deployment to Firebase Functions**

Ensure you're authenticated with Firebase CLI. Then:

1. Deploy to Firebase Functions:

```bash
   firebase deploy --only functions
```
