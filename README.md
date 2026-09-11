# Salesboard UI Demo

Create a modern SaaS-style web application called "SalesBoard".

IMPORTANT:

This is a FRONTEND/UI prototype for a developer workshop.

The goal is to create a polished and realistic interface that will later be reproduced manually in a Symfony + Twig + Tailwind CSS application.

Do NOT build a real backend.

Do NOT implement authentication.

Do NOT implement a real database.

Use realistic mock data only.

The final UI should look like a professional business management application, not a generic template.

==================================================

PRODUCT

==================================================

SalesBoard is a business dashboard for managing sales, customers, products and transactions.

The main user is a business manager who wants to quickly understand:

- business performance

- sales

- revenue

- customers

- products

- recent transactions

The application should feel like a real production SaaS product.

==================================================

DESIGN DIRECTION

==================================================

Use:

- Tailwind CSS

- shadcn/ui style components

- Lucide icons

- modern SaaS design

- clean typography

- subtle borders

- rounded cards

- restrained shadows

- excellent spacing

- strong visual hierarchy

- responsive layout

Avoid:

- excessive gradients

- flashy animations

- excessive colors

- oversized illustrations

- generic landing-page aesthetics

- unnecessary decorative elements

The interface should prioritize clarity and usability.

Use a neutral professional visual system with one subtle accent color.

The UI must be fully responsive.

==================================================

APPLICATION LAYOUT

==================================================

Desktop:

- fixed/collapsible sidebar on the left

- top navigation/header

- main content area

Mobile:

- sidebar becomes a mobile navigation/drawer

- content remains easy to use

- tables become horizontally scrollable or adapt appropriately

Sidebar navigation:

Dashboard

Sales

Customers

Products

Transactions

Reports

Settings

Include appropriate Lucide icons.

At the bottom of the sidebar:

- current user avatar

- user name

- role

- small account/settings menu

==================================================

DASHBOARD PAGE

==================================================

Create a polished dashboard.

Header:

Title:

"Dashboard"

Subtitle:

"Overview of your business performance"

Right side:

- date range selector

- small notification button

- user menu

--------------------------------------------------

STATISTICS

--------------------------------------------------

Create four statistic cards:

Revenue

Value: "$48,280"

Change: "+12.5%"

Comparison: "vs. previous month"

Orders

Value: "1,284"

Change: "+8.2%"

Customers

Value: "3,842"

Change: "+5.4%"

Average order

Value: "$37.60"

Change: "+3.1%"

Each card should contain:

- Lucide icon

- value

- change indicator

- comparison text

--------------------------------------------------

SALES CHART

--------------------------------------------------

Create a large "Sales overview" card.

Include:

- line or area chart

- monthly sales data

- selectable period

- legend

Use realistic mock data for the last 12 months.

The chart should be visually clean and easy to read.

--------------------------------------------------

RECENT TRANSACTIONS

--------------------------------------------------

Create a card/table called:

"Recent transactions"

Columns:

- Customer

- Date

- Amount

- Payment method

- Status

Use realistic data.

Statuses:

- Completed

- Pending

- Cancelled

Use badges with appropriate visual hierarchy.

Payment methods:

- Card

- Mobile Money

- Bank transfer

- Cash

Include:

"View all transactions"

--------------------------------------------------

TOP PRODUCTS

--------------------------------------------------

Create a "Top products" card.

Show:

- product name

- category

- units sold

- revenue

Use realistic mock products.

--------------------------------------------------

LOW STOCK ALERT

--------------------------------------------------

Create a small card showing products with low stock.

Columns/information:

- product

- current stock

- minimum stock

- status

Use warning badges.

==================================================

SALES PAGE

==================================================

Create a complete sales listing page.

Features visually represented:

- page title

- search field

- date filter

- status filter

- "New sale" button

- table

Columns:

- Reference

- Customer

- Date

- Items

- Total

- Status

- Actions

Include pagination.

Create realistic mock data.

==================================================

CUSTOMERS PAGE

==================================================

Create customer management UI.

Include:

- page title

- search

- filters

- "Add customer" button

- customer table

Columns:

- Customer

- Email

- Phone

- Total purchases

- Number of orders

- Last purchase

- Status

- Actions

Add a customer details view or modal.

==================================================

PRODUCTS PAGE

==================================================

Create product management UI.

Include:

- search

- category filter

- stock status filter

- "Add product" button

Product table:

- Product

- SKU

- Category

- Price

- Stock

- Status

- Actions

Use statuses:

- In stock

- Low stock

- Out of stock

Include product creation/edit UI as a modal or dedicated form.

==================================================

TRANSACTIONS PAGE

==================================================

Create a transaction history page.

Include:

- search

- date range

- payment method filter

- status filter

- transaction table

Columns:

- Transaction ID

- Customer

- Date

- Amount

- Payment method

- Status

==================================================

REPORTS PAGE

==================================================

Create a reporting page with:

- revenue overview

- sales by period

- sales by category

- top products

- customer growth

Use several clean cards and charts.

Do not make the page overly complicated.

==================================================

SETTINGS PAGE

==================================================

Create a simple settings interface.

Sections:

- Business information

- User profile

- Notifications

- Preferences

Use tabs or cards.

==================================================

COMPONENTS

==================================================

Use a consistent component system.

Important reusable components:

- Button

- Card

- Badge

- Input

- Select

- Table

- Dialog

- Dropdown menu

- Tabs

- Avatar

- Tooltip

- Date picker

- Alert

Use Lucide icons consistently.

==================================================

RESPONSIVE DESIGN

==================================================

The entire application must work well on:

- desktop

- tablet

- mobile

Pay particular attention to:

- sidebar

- tables

- dashboard cards

- charts

- forms

- navigation

==================================================

ACCESSIBILITY

==================================================

Use:

- semantic HTML

- accessible buttons

- labels for form fields

- keyboard-friendly interactions

- sufficient contrast

- meaningful aria labels where necessary

==================================================

DATA

==================================================

Use realistic fictional data.

Do not use real companies or real people.

The data should be coherent across the application.

For example:

- customers referenced by sales should exist in Customers

- products referenced by sales should exist in Products

- dashboard statistics should be consistent with the mock transactions

==================================================

IMPORTANT FOR THE WORKSHOP

==================================================

The UI should be visually impressive but technically understandable.

Avoid creating unnecessary complex components.

Prefer reusable components and clear layouts.

The final result will be used as the visual reference for a Symfony/Twig implementation.

Therefore:

- keep component structures logical

- avoid framework-specific complexity that would make reproduction in Twig difficult

- prefer standard HTML structures

- use Tailwind utility classes

- use shadcn-style components

- use Lucide icons

The final application should look like a polished dashboard that a developer could realistically recreate in Symfony.

Before finishing, review the entire UI for:

- visual consistency

- spacing

- typography

- responsive behavior

- component consistency

- realistic data

- accessibility

- unnecessary complexity

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/08f7ff89-0f2e-41c2-b935-fc99c2e41668).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
