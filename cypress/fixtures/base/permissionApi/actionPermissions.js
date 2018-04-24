function actionPermissions() {
	return {
		'data': {
			'id': '7d28e861-baad-4eec-974b-a0c8e22c8af6',
			'type': 'userActionSets',
			'attributes': {
				'objects': [
					{
						'name': 'Department',
						'type': 'departments',
						'id': '95250b5f-1920-45e7-978c-1a0aef127388',
						'permittedActions': [
							'Create',
							'Delete',
							'Edit',
							'View'
						]
					},
					{
						'name': 'Position',
						'type': 'positions',
						'id': '831ab33a-9665-47f2-b8cd-76863700421d',
						'permittedActions': [
							'Edit',
							'View',
							'Delete',
							'Create'
						]
					},
					{
						'name': 'Assignment',
						'type': 'assignments',
						'id': '0c764278-d6f6-4d9b-983a-d0a46453574e',
						'permittedActions': [
							'Edit',
							'Delete',
							'View',
							'Create'
						]
					},
					{
						'name': 'FormTemplate',
						'type': 'formTemplates',
						'id': '6815c59a-14d5-4c33-b947-4cc2187a8d9d',
						'permittedActions': [
							'BuildOverlay',
							'Edit',
							'View',
							'Archive',
							'Send',
							'StartForMyself',
							'Create'
						]
					},
					{
						'name': 'FormInstance',
						'type': 'formInstances',
						'id': 'e26ef729-923d-4e3f-b665-a67acafb67ef',
						'permittedActions': [
							'Edit',
							'Delete',
							'Archive',
							'Track',
							'View'
						]
					},
					{
						'name': 'Packet',
						'type': 'packets',
						'id': 'c05553a6-89b0-4128-9c8c-025f5cd35416',
						'permittedActions': [
							'Edit',
							'Send',
							'View',
							'Archive',
							'Create'
						]
					},
					{
						'name': 'PacketInstance',
						'type': 'packetInstances',
						'id': 'a93d279e-6960-4067-aa26-ef918e648381',
						'permittedActions': [
							'Edit',
							'Archive',
							'View'
						]
					},
					{
						'name': 'JobType',
						'type': 'jobTypes',
						'id': '24dc666f-0cec-414f-9393-6ae334e0f262',
						'permittedActions': [
							'Edit',
							'Delete',
							'View',
							'Create'
						]
					},
					{
						'name': 'Location',
						'type': 'locations',
						'id': 'c998e53a-b9e3-4a1b-bfd7-3f7084eb0363',
						'permittedActions': [
							'View',
							'Create',
							'Edit',
							'Delete'
						]
					},
					{
						'name': 'PermissionProfile',
						'type': 'permissionProfiles',
						'id': '3c02ba1a-c39c-4b98-83e2-3e630e3d92f9',
						'permittedActions': [
							'View',
							'Delete',
							'Edit',
							'Create'
						]
					},
					{
						'name': 'SecurityGroup',
						'type': 'securityGroups',
						'id': 'cdff2475-c045-4ffa-a809-436c7736eec6',
						'permittedActions': [
							'View',
							'Edit',
							'Delete',
							'DeleteScope',
							'Create'
						]
					},
					{
						'name': 'ListHeader',
						'type': 'listHeaders',
						'id': '6e426d91-8a3f-48d4-87bb-81d88d6111e2',
						'permittedActions': [
							'View',
							'Edit',
							'Delete',
							'Create'
						]
					},
					{
						'name': 'Employee',
						'type': 'employees',
						'id': '97d8ae72-51fa-45fd-b837-235936bb3ebd',
						'permittedActions': [
							'Edit',
							'Activate',
							'Deactivate',
							'Terminate',
							'View',
							'Archive',
							'Delete',
							'ViewEmployeeFile',
							'CreateEmployeeFile',
							'UpdateEmployeeFile',
							'ManageAccountAccess',
							'FormInstances',
							'DeleteFormInstance',
							'Create'
						]
					},
					{
						'name': 'FileRecord',
						'type': 'fileRecords',
						'id': '49b933e1-058f-40ca-98a6-294efe2f1543',
						'permittedActions': [
							'DataImport',
							'SoftDelete'
						]
					}
				]
			}
		}
	};
}

module.exports = actionPermissions;