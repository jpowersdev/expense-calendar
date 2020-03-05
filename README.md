## Redux Income & Expense Tracker

This originated as a playground for messing with redux, and evolved into something I'd like to use.

Most budget apps let you label past transactions so you can see where your money has been spent. I'm planning to go the opposite direction with this, allowing you to enter all your recurring income and expenses so you can see an overview of where your money _will_ go.

There will be charts and graphs. As of this release, it does the following:

- Show a calendar of each month
- Highlight today's date
- Allow you to increment/decrement month
- Allows you to fast travel back to the current month
- Sums up the income/expenses in a given day
- Allows you to enter new income through a form
- Allows you to enter new expenses through a form

All of this is stored in the global redux state, and all actions are dispatched through that system.

Styles are handled by styled components. For now, I'm defining everything on the fly, but soon everything will be refactored in such a way that it can be reused.

Forms are using react-hook-form, with yup for validation. I've used a lot of formik in the past, but react-hook-form boasts impressive performance with far fewer re-renders during input. I gave it a shot and it's wonderfully simple.

Dayjs is the date library I chose because it has the same api as momentjs, but is much smaller (and also immutable).

If you have questions, feel free to email me: [jpowersdev@gmail.com](mailto:jpowersdev@gmail.com)
