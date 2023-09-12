/*

[rewrite_local]

# > FIMO
^https?:\/\/server\.yoyiapp\.com\/fimo-user\/apple\/certificate$ url script-response-body https://raw.githubusercontent.com/theblackturtle/qt/dev/fimo.js

[mitm] 

hostname = server.yoyiapp.com

source product_id: https://server.yoyiapp.com/fimo-common/subscribeSimpleConfig
all fims: https://server.yoyiapp.com/fimo-common/filmAll?Language=en
*
*
*/


var objc = JSON.parse($response.body);

objc =
{
    "receipt": {
        "receipt_type": "Production",
        "app_item_id": 1454219307,
        "receipt_creation_date": "2022-01-21 08:42:07 Etc/GMT",
        "bundle_id": "com.fimo.camera",
        "original_purchase_date": "2020-09-06 04:26:38 Etc/GMT",
        "in_app": [
            {
                "quantity": "1",
                "purchase_date_ms": "1640344725000",
                "transaction_id": "600000842246059",
                "is_trial_period": "false",
                "original_transaction_id": "600000842246059",
                "purchase_date": "2021-12-24 11:18:45 Etc/GMT",
                "product_id": "fimopro_hw_0.8",
                "original_purchase_date_pst": "2021-12-24 03:18:45 America/Los_Angeles",
                "in_app_ownership_type": "PURCHASED",
                "original_purchase_date_ms": "1640344725000",
                "purchase_date_pst": "2021-12-24 03:18:45 America/Los_Angeles",
                "original_purchase_date": "2021-12-24 11:18:45 Etc/GMT"
            }
        ],
        "adam_id": 1454219307,
        "receipt_creation_date_pst": "2022-01-21 00:42:07 America/Los_Angeles",
        "request_date": "2022-01-21 08:58:21 Etc/GMT",
        "request_date_pst": "2022-01-21 00:58:21 America/Los_Angeles",
        "version_external_identifier": 845872490,
        "request_date_ms": "1642755501063",
        "original_purchase_date_pst": "2020-09-05 21:26:38 America/Los_Angeles",
        "application_version": "1198",
        "original_purchase_date_ms": "1599366398000",
        "receipt_creation_date_ms": "1642754527000",
        "original_application_version": "159",
        "download_id": 100059354608023
    },
    "status": 0,
    "environment": "Production"
};

$done({ body: JSON.stringify(objc) });
