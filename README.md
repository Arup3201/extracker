# extracker

Personal expense tracker

## Features

- Add/Edit/Delete expenses with time, category
- Add extra notes to expense
- Categorize expenses (e.g. Food, Rent etc).
- Add new categories
- Summarize monthly expense - total, most expensive category, most expensive day of the week with highest average expense
- User can see few expenses of every month with their short summary
- User can click on "Show more" for a full view of that month's expense
- In the full view, user can see all the expenses in the tabular form with search by notes and filter by category/time
- In the full view, user can see detailed summary with a click on "View detailed summary"
- In the detailed summary, user can see total, total per category (sorted), average per day of the week (sorted)

## Technologies

- _Frontend_: React, Typescript
- _Backend_: NodeJS, Express
- _Database_: PostgreSQL

## Models

### expenses

- id
- created_at
- updated_at
- amount
- category
- expense_at
- note

### categories

- id
- created_at
- updated_at
- name

## API

### expense

#### `/expenses`

- **POST** method
- create a new expense

#### `/expenses/:id`

- **PUT**
- edit existing expense

#### `/expenses/:id`

- **DELETE**
- delete an expense

#### `/expenses/all`

- **GET**
- get last 5 expenses of all the months for every year along with short summaries of each month

#### `/expenses/:month?page=1&size=10`

- **GET**
- get the paginated expenses of the `month`

#### `/expenses/:month/summary`

- **GET**
- get detailed summary of the `month`

#### `/expenses/:month/search?query="somequery"`

- **GET**
- get paginated search for the query `somequery`

#### `/expenses/:month/filter?by=category&value=food`

- **GET**
- get paginated expenses using filters for category or time

> time filter URL - `/expenses/:month/filter?by=time&start=05-08-2025&end=15-08-2025`

#### `/expenses/:month/summary/filter?by=category&value=food`

- **GET**
- get summary after applying the filters

### categories

#### `/categories`

- **POST**
- add a new category

#### `/categories/all`

- **GET**
- get all categories
