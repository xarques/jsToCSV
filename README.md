## Convert a JSON object to CSV file:

```js
{
  "common": {
    "actions": "Actions",
    "addACoach": "New coach",
    "admin": "administrator",
  }
}
```

is transformed to:

```
"common","actions","Actions"
"common","addACoach","New coach"
"common","admin","administrator"
```

Then it can be imported in a Google Sheets in order to move the i18n "source of truth" from JSON to Google Sheets thanks to https://github.com/2tons/i18n-google-spreadsheets

The JSON will be automaticallly generated by i18n-google-spreadsheets
