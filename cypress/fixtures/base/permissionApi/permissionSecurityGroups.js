function permissionSecurityGroups() {
	return {
  "data": [
    {
      "id": "2029d11e-96d0-4adf-bc0f-ee87cc742be2",
      "type": "securityGroups",
      "attributes": {
        "contextId": "20001",
        "groupId": "2029d11e-96d0-4adf-bc0f-ee87cc742be2",
        "groupName": "AllEmployees",
        "groupDescription": "All Employees",
        "appliesToAllEmployees": true,
        "autoCreated": true,
        "locked": false,
        "isHidden": false,
        "employeeIds": [],
        "claims": [],
        "ownerId": "2029d11e-96d0-4adf-bc0f-ee87cc742be2",
        "ownerVersionNumber": 68,
        "organizationId": 20001
      },
      "relationships": {
        "securityScopes": {
          "links": {
            "self": "https://ecsandproxyawsstage.flqa.net/PermissionApi/api/SecurityGroups/2029d11e-96d0-4adf-bc0f-ee87cc742be2/securityScopes"
          },
          "data": [
            {
              "id": "0dbef741-6e7b-4e9a-8923-dd47b56760a6",
              "type": "securityScopes"
            },
            {
              "id": "c39e497a-b06b-4d13-9dea-a2829a3f14b8",
              "type": "securityScopes"
            }
          ],
          "meta": {
            "count": "2"
          }
        }
      },
      "links": {
        "self": "https://ecsandproxyawsstage.flqa.net/PermissionApi/api/SecurityGroups/2029d11e-96d0-4adf-bc0f-ee87cc742be2"
      }
    },
    {
      "id": "a58b8efa-32c7-4b50-9e0a-e3cc8d14c4aa",
      "type": "securityGroups",
      "attributes": {
        "contextId": "20001",
        "groupId": "a58b8efa-32c7-4b50-9e0a-e3cc8d14c4aa",
        "groupName": "SuperAdmins",
        "groupDescription": "Super Administrators",
        "appliesToAllEmployees": false,
        "autoCreated": true,
        "locked": false,
        "isHidden": false,
        "employeeIds": [
          "da13eef1-546b-494e-84b6-0ac19746ad3f",
          "1254caa6-627b-4fca-aba7-cdeec347bcc9",
          "647e2475-72bc-4f67-9662-4531dc379692",
          "2e1eff8e-3660-4719-a64e-49ebb3a5c0f0",
          "00afbf10-22a3-4a07-8fa3-d27d601365f7",
          "c145f38c-37e4-4a20-9110-77d9d5543cf9",
          "0fb40e9a-41ba-45f3-aa77-84e4316cd246",
          "30625368-8ae5-4543-9d84-8b9886371371",
          "01592655-3bd3-4ce6-ab63-86a19904df5a",
          "e7a2911e-6b55-4880-b4ea-fba5984f8c8f",
          "602bb7d8-3347-4f24-8634-d3ba05234478",
          "fce062e3-f723-471c-bff4-a0f7da8dee5b",
          "9d16c476-fdd6-4328-8693-937433b3fdba",
          "fd11fc89-a35a-4a75-bca1-5cd18ed03180",
          "a831474c-cf62-48e6-9dc3-1e911e957d7e",
          "93067edc-688e-4e68-80fb-4e4b64996ebe",
          "fbadb0f0-80c6-44d6-aa13-06c7da08021d",
          "83fa6b30-f179-43a6-946d-c61d7c7ca98f",
          "26bac5b9-6cf5-4ba7-84ec-71cb05bc2f12",
          "78206388-4ba5-4202-81b6-7287a4b3aa5d",
          "750a1e12-1b05-4a45-886f-b0a7ce0a6c64",
          "7f6b9b7b-7e14-4138-9049-e5fb228fb2f4",
          "b2b7fbca-0d96-4c4f-b885-ac21e116b183",
          "2eb5cff3-9318-43c5-8111-027f72f120fa",
          "38243ed8-9db1-42b2-b001-d185d1be9d4a",
          "1d9db46c-fc71-4439-b452-bf29c9307ff4",
          "369383cf-ebc1-4763-a371-2587352f499b",
          "34449f18-f7bb-4158-aa4b-bb88b57d9faf",
          "0adaae76-f9bf-4574-965f-5d74be786f55",
          "abbfcc41-79a2-4b55-b828-4937ad51296b",
          "63f0d71c-526f-4985-8cdf-f331e2f67790",
          "70911dba-7cce-40ed-b661-a83e7309b29f",
          "77ceba45-54cf-4ded-bd52-924cfb5dba1c",
          "caae69a3-3d17-4ab6-9576-97a6a65a7643",
          "38bc1a92-fa19-46cf-9748-cb2593b08d40",
          "9dab777f-38ae-4acd-9e09-01ef4bd8c0bf",
          "959b1a71-e57b-4526-a2db-fcedc22602fd",
          "7755df61-cbeb-44d7-8e26-7b07dd80dc79",
          "bb9f899d-3a44-4555-8cdd-744a23e2be9a",
          "94ca157b-ab89-4eb9-b112-0aacac47e58c",
          "7d12ca05-595d-4a36-8e77-bcd20c68061a",
          "69199169-1095-43d2-ba0c-eae8a0d5a6c1",
          "807b6e20-0dcd-472b-adb5-7e83d24591e8",
          "c137dcbd-6963-4160-baeb-9ff974b67c16",
          "bb7f002e-ca8d-4723-843d-5b9bc0e327b8",
          "681f109d-9c86-477a-82d7-373a8765db59",
          "1dbcffa0-3be7-418c-9dff-44c1c334ccc9",
          "c0b914d7-0177-459f-90e2-810d1f891862",
          "1ad29df4-fc6e-42e9-a077-974152a08e65",
          "af02976e-cf55-4b08-885c-2726e1c5fd83",
          "9de55507-3b9e-4fe1-92d1-17ddb6612fa9",
          "72e0c96b-52ee-45bf-8031-d68d45532812",
          "e16a2104-4fab-4bec-bd08-a5d2bfe0f84c",
          "077b2871-37c0-4dca-9e16-fe0c7d97ce87",
          "7a55bc49-7617-4493-baf0-15afc20f8dde",
          "b107e120-49be-430e-b3d4-fdb04e07bab2",
          "198fd744-3f52-4fa1-975a-8bc1680e524a",
          "6ae24e77-71e6-42e6-90ba-ca8b87f83055",
          "86bac5bc-e7cf-4c8e-bac7-271ad85dde28",
          "22115937-633e-4326-ab9b-c5d048e063fd",
          "fcbd7344-7f51-473e-a7dd-5c082ec1aee3",
          "4c5116c1-3b8e-4cc4-9099-8e93a1fa0179",
          "c49a0748-7711-4ca4-b36c-79b520e8cdb8",
          "53077e91-95de-484e-8355-f7cc0d5b35b3",
          "01374640-923e-43de-a9e0-98959654fb69",
          "e01cf6f9-037c-4525-8630-36f187bf03a4",
          "15bd81a0-2a08-4090-9f99-bfbfa3bd1c08",
          "0f6c3a87-8554-484a-b4c0-8d1bcafde3be",
          "5cebf3b9-8b55-4833-ab7b-2b5042d9c79d",
          "66f69a0d-3355-4af5-9b8b-c7663e7f033f",
          "74a953c5-078b-493b-9f87-540c55ef97db",
          "ac4d3d67-4f2f-44f3-a439-d4a2a0a7fb83",
          "cbcb0c1b-8fa0-4570-84c5-3b41d390df98",
          "4a7c1e68-cd73-4714-b3b6-1d45e0eedb1f",
          "a1edced3-959b-42a1-95a4-b2d0d255ecee",
          "0c0b86f0-41b1-4e11-83b0-378b113ebfe8",
          "60f7699c-dc20-4d1b-8da2-e2bd6e1a4add",
          "a758a301-f359-4ecb-a39c-daf5b56d21ac",
          "7aff56b4-0471-4542-bb2b-66643ce19cdc",
          "bd7d8cd2-397e-4f34-8fcf-b9f3a1a999f3",
          "8ae24a5a-1c00-4438-9b0a-29125712bbfd",
          "5c722eba-1fd0-4a4e-8b0a-6b3bc668daa7",
          "7e079cd2-3300-4181-85ba-fe7a601dd861",
          "82772f2f-b385-495d-908f-229500c8e8fc",
          "04941faf-58e6-4086-a1f0-bee4a0d82ead",
          "788137aa-b45e-4be9-b926-ba049a7c8ce5",
          "fccdef32-c1ed-45b4-9895-ce8e98ca05ad",
          "eb4aef61-8d8b-4838-8ad4-1d54fa7fb4d1",
          "2f863fd9-9abd-437e-8839-bcf2630aa759",
          "5794002a-53c8-4d1d-9ca5-3653fe9b57e3",
          "1a6b0f93-f18d-414c-89a0-03917a5bc0aa",
          "4ecc38f0-3279-4791-8faa-3a7338934e90",
          "152c9595-75b1-4ec8-924e-9366b903efbb",
          "c0919769-8e74-4629-83a1-c02a3779ed38",
          "6ce125b5-abae-4a28-b15e-9cb5d8147e64",
          "3615cd5e-c327-4076-bf75-74e0bf8e2ef3",
          "9c602f33-8ba7-4110-9900-847e36327908",
          "6b3a7740-478d-456e-9267-6f32ed5d4c56",
          "6258efe7-42e0-409a-a112-61af66c08388",
          "42fb93b7-3c1a-4195-8762-e4dd69cf5876"
        ],
        "claims": [],
        "ownerId": "a58b8efa-32c7-4b50-9e0a-e3cc8d14c4aa",
        "ownerVersionNumber": 172,
        "organizationId": 20001
      },
      "relationships": {
        "securityScopes": {
          "links": {
            "self": "https://ecsandproxyawsstage.flqa.net/PermissionApi/api/SecurityGroups/a58b8efa-32c7-4b50-9e0a-e3cc8d14c4aa/securityScopes"
          },
          "data": [
            {
              "id": "04b3a37c-44df-42a8-9982-6ebd25911f59",
              "type": "securityScopes"
            }
          ],
          "meta": {
            "count": "1"
          }
        }
      },
      "links": {
        "self": "https://ecsandproxyawsstage.flqa.net/PermissionApi/api/SecurityGroups/a58b8efa-32c7-4b50-9e0a-e3cc8d14c4aa"
      }
    },
    {
      "id": "693b457b-ecef-4bf6-9e0a-8a8c67456b3c",
      "type": "securityGroups",
      "attributes": {
        "contextId": "20001",
        "groupId": "693b457b-ecef-4bf6-9e0a-8a8c67456b3c",
        "groupName": "MinimalAllEmployees",
        "groupDescription": "All Employees minimum permissions",
        "appliesToAllEmployees": true,
        "autoCreated": true,
        "locked": true,
        "isHidden": false,
        "employeeIds": [],
        "claims": [],
        "ownerId": "693b457b-ecef-4bf6-9e0a-8a8c67456b3c",
        "ownerVersionNumber": 15,
        "organizationId": 20001
      },
      "relationships": {
        "securityScopes": {
          "links": {
            "self": "https://ecsandproxyawsstage.flqa.net/PermissionApi/api/SecurityGroups/693b457b-ecef-4bf6-9e0a-8a8c67456b3c/securityScopes"
          },
          "data": [
            {
              "id": "8f8271a1-60bd-4314-b4f6-458780df5ef6",
              "type": "securityScopes"
            }
          ],
          "meta": {
            "count": "1"
          }
        }
      },
      "links": {
        "self": "https://ecsandproxyawsstage.flqa.net/PermissionApi/api/SecurityGroups/693b457b-ecef-4bf6-9e0a-8a8c67456b3c"
      }
    }
  ],
  "included": [
    {
      "id": "0dbef741-6e7b-4e9a-8923-dd47b56760a6",
      "type": "securityScopes",
      "attributes": {
        "contextId": "20001",
        "permissionProfileId": "e4aee067-6194-4981-aff2-46ec0b71b752",
        "locationIds": [],
        "locationAdministrationContext": 3,
        "jobTypeIds": [],
        "jobTypeAdministrationContext": 3,
        "departmentIds": [],
        "departmentAdministrationContext": 3,
        "employeeIds": [],
        "employeeAdministrationContext": 1,
        "validUntilUtc": "9999-12-31T23:59:59.9999999Z",
        "autoCreated": true,
        "description": "View Self",
        "locked": false,
        "isViewSelf": true,
        "ownerId": "2029d11e-96d0-4adf-bc0f-ee87cc742be2",
        "ownerVersionNumber": 68,
        "organizationId": 20001
      },
      "links": {
        "self": "https://ecsandproxyawsstage.flqa.net/PermissionApi/api/SecurityGroups/2029d11e-96d0-4adf-bc0f-ee87cc742be2/SecurityScopes/0dbef741-6e7b-4e9a-8923-dd47b56760a6"
      }
    },
    {
      "id": "c39e497a-b06b-4d13-9dea-a2829a3f14b8",
      "type": "securityScopes",
      "attributes": {
        "contextId": "20001",
        "permissionProfileId": "3467b07b-4aa6-4864-a336-a1e5e325a298",
        "locationIds": [],
        "locationAdministrationContext": 0,
        "jobTypeIds": [],
        "jobTypeAdministrationContext": 0,
        "departmentIds": [],
        "departmentAdministrationContext": 0,
        "employeeIds": [],
        "employeeAdministrationContext": 0,
        "validUntilUtc": "9999-12-31T23:59:59.9999999Z",
        "autoCreated": true,
        "description": "View Others",
        "locked": false,
        "isViewSelf": false,
        "ownerId": "2029d11e-96d0-4adf-bc0f-ee87cc742be2",
        "ownerVersionNumber": 68,
        "organizationId": 20001
      },
      "links": {
        "self": "https://ecsandproxyawsstage.flqa.net/PermissionApi/api/SecurityGroups/2029d11e-96d0-4adf-bc0f-ee87cc742be2/SecurityScopes/c39e497a-b06b-4d13-9dea-a2829a3f14b8"
      }
    },
    {
      "id": "04b3a37c-44df-42a8-9982-6ebd25911f59",
      "type": "securityScopes",
      "attributes": {
        "contextId": "20001",
        "permissionProfileId": "cdf74b8b-84b7-47e3-914a-f51424d86426",
        "locationIds": [],
        "locationAdministrationContext": 3,
        "jobTypeIds": [],
        "jobTypeAdministrationContext": 3,
        "departmentIds": [],
        "departmentAdministrationContext": 3,
        "employeeIds": [],
        "employeeAdministrationContext": 3,
        "validUntilUtc": "9999-12-31T23:59:59.9999999Z",
        "autoCreated": true,
        "description": "Edit All",
        "locked": false,
        "isViewSelf": false,
        "ownerId": "a58b8efa-32c7-4b50-9e0a-e3cc8d14c4aa",
        "ownerVersionNumber": 172,
        "organizationId": 20001
      },
      "links": {
        "self": "https://ecsandproxyawsstage.flqa.net/PermissionApi/api/SecurityGroups/a58b8efa-32c7-4b50-9e0a-e3cc8d14c4aa/SecurityScopes/04b3a37c-44df-42a8-9982-6ebd25911f59"
      }
    },
    {
      "id": "8f8271a1-60bd-4314-b4f6-458780df5ef6",
      "type": "securityScopes",
      "attributes": {
        "contextId": "20001",
        "permissionProfileId": "0554cd2f-5cfe-42a5-a2e8-51d8d2c0aacb",
        "locationIds": [],
        "locationAdministrationContext": 3,
        "jobTypeIds": [],
        "jobTypeAdministrationContext": 3,
        "departmentIds": [],
        "departmentAdministrationContext": 3,
        "employeeIds": [],
        "employeeAdministrationContext": 1,
        "validUntilUtc": "9999-12-31T23:59:59.9999999Z",
        "autoCreated": true,
        "description": "Minimal View Self",
        "locked": true,
        "isViewSelf": true,
        "ownerId": "693b457b-ecef-4bf6-9e0a-8a8c67456b3c",
        "ownerVersionNumber": 15,
        "organizationId": 20001
      },
      "links": {
        "self": "https://ecsandproxyawsstage.flqa.net/PermissionApi/api/SecurityGroups/693b457b-ecef-4bf6-9e0a-8a8c67456b3c/SecurityScopes/8f8271a1-60bd-4314-b4f6-458780df5ef6"
      }
    }
  ]}
}

module.exports = permissionSecurityGroups;
