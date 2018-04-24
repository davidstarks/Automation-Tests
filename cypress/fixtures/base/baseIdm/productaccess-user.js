module.exports = () => {
	return {  
   "Id":3155802,
   "Flid":null,
   "OrganizationProvider":null,
   "OrganizationId":null,
   "Enabled":true,
   "Products":[  

   ],
   "Identities":[  

   ],
   "ApplicationUsers":[  

   ],
   "Invitations":[  

   ],
   "FirstName":"Martin",
   "LastName":"Chamberlain",
   "Email":"mchamberlain@frontlineed.com",
   "ExternalId":null,
   "EmailIsVerified":true,
   "LanguagePreference":"en",
   "Roles":[  

   ],
   "IsFrontlineUser":true,
   "OrganizationUsers":[  
      {  
         "Id":3155801,
         "Flid":3155802,
         "OrganizationProvider":"ec",
         "OrganizationId":"20001",
         "Enabled":true,
         "Products":[  
            "EC"
         ],
         "Identities":[  
            {  
               "Type":"employee",
               "Id":"3615cd5e-c327-4076-bf75-74e0bf8e2ef3"
            }
         ],
         "ApplicationUsers":[  
            {  
               "Type":"employee",
               "Id":"3615cd5e-c327-4076-bf75-74e0bf8e2ef3",
               "FirstName":"Martin",
               "LastName":"Chamberlain",
               "Email":null,
               "ExternalId":"mchamberlain",
               "Products":{  
                  "EC":"Enabled"
               }
            }
         ],
         "Invitations":[  
            {  
               "Id":2447160,
               "User":{  
                  "Flid":3155802,
                  "OrganizationProvider":{  
                     "Name":"ec",
                     "Url":"http://organizationservice/v0.5/api/",
                     "IsDefault":true
                  },
                  "Organization":{  
                     "Id":"20001",
                     "Name":""
                  },
                  "Enabled":true,
                  "Products":[  
                     {  
                        "ProductId":"EC",
                        "Name":"Frontline Central",
                        "Description":null,
                        "LegacyName":null,
                        "OrgNavigationUrlTemplate":"https://supersuitawsstage.flqa.net/ec-dashboard/?currentOrg={orgId}",
                        "DefaultSignInUrl":"https://supersuitawsstage.flqa.net/ec-dashboard",
                        "ExternalIdProvider":null,
                        "RequireInviteForRegistration":true,
                        "DefaultUserType":"employee",
                        "DefaultOrganizationProvider":{  
                           "Name":"ec",
                           "Url":"http://organizationservice/v0.5/api/",
                           "IsDefault":true
                        },
                        "AllowAllUsers":true,
                        "IsTest":false,
                        "SupportsMergration":false,
                        "RequiresOrgIdForMergration":false,
                        "AllowedRoles":[  

                        ]
                     }
                  ],
                  "Identities":[  
                     {  
                        "Type":"employee",
                        "Id":"3615cd5e-c327-4076-bf75-74e0bf8e2ef3"
                     }
                  ],
                  "Invitations":[  

                  ]
               },
               "Email":"mchamberlain@frontlineed.com",
               "Name":"Martin",
               "ReturnUrl":"https://supersuitawsstage.flqa.net",
               "InvitationCreated":"2017-11-14T22:51:09.54",
               "ExpirationSeconds":2592000,
               "IsRevoked":false,
               "IsPending":false,
               "IsAccepted":true,
               "IsExpired":false,
               "IsAssigned":true
            }
         ],
         "FirstName":"Martin",
         "LastName":"Chamberlain",
         "Email":null,
         "ExternalId":"mchamberlain",
         "EmailIsVerified":null,
         "LanguagePreference":"en",
         "Roles":[  

         ],
         "IsFrontlineUser":false,
         "OrganizationUsers":[  

         ],
         "FrontlineUser":null,
         "UserName":null
      }
   ],
   "FrontlineUser":null,
   "UserName":null
}


};