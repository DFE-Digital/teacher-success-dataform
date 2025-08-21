const dfeAnalyticsDataform = require("dfe-analytics-dataform");

// Repeat the lines below for each and every events table you want dfe-analytics-dataform to process in your Dataform project - distinguish between them by giving each one a different eventSourceName. This will cause all the tables produced automatically by dfe-analytics-dataform to have your suffix included in them to allow users to tell the difference between them.
dfeAnalyticsDataform({
    eventSourceName: "ts",
    bqDatasetName: "events_production",
    bqEventsTableName: "events",
    expirationDays: false, // replace with the integer number of days you want to delete data in your BigQuery project after, or leave as false if you don't want to enforce a project-wide data retention schedule
    hiddenPolicyTagLocation: "projects/teacher-success/locations/europe-west2/taxonomies/3510957124238755356/policyTags/6237998071130948217",
    urlRegex: "teach.education.gov.uk", // re-2 formatted regular expression to use to identify whether a URL is this service's own URL or an external one. If your service only has one domain name set this to 'www.yourdomainname.gov.uk' (without the protocol). If you have more than one use something like '(?i)(www.domain1.gov.uk|www.domain2.gov.uk|www.domain3.gov.uk)'
    dataSchema: [{
            entityTableName: "page_feedbacks",
            description: "",
            keys: [{
                keyName: "useful",
                dataType: "string",
                description: "Description of this field to include in metadata here."
            }, {
                keyName: "feedback",
                dataType: "string",
                description: "Description of this field to include in metadata here."
            }, {
                keyName: "url",
                dataType: "string",
                description: "Description of this field to include in metadata here."
            }]
        },
        {
            entityTableName: "feedbacks",
            description: "",
            keys: [{
                keyName: "rating",
                dataType: "string",
                description: "Description of this field to include in metadata here."
            }, {
                keyName: "url",
                dataType: "string",
                description: "Description of this field to include in metadata here."
            }, {
                keyName: "description",
                dataType: "string",
                description: "Description of this field to include in metadata here."
            }, {
                keyName: "email",
                dataType: "string",
                description: "Description of this field to include in metadata here.",
                hidden: true
            }, {
                keyName: "topic",
                dataType: "string",
                description: "Description of this field to include in metadata here."
            }, {
                keyName: "can_contact",
                dataType: "string",
                description: "Description of this field to include in metadata here."
            }]
        }
    ]
});
