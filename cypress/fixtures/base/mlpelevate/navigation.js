module.exports = () => {
	return [
		{
			title: 'Insights',
			icon: 'fa-li-lightbulb',
			routeMatcher: ['/cc-overview'],
			url: 'https://supersuitawsstage.flqa.net/cc-overview',
		},
		{
			title: 'Dashboard',
			icon: 'fa-li-dashboard',
			routeMatcher: ['/dashboard'],
			url: 'https://elevate.flqa.net/dashboard',
			component: { stateName: 'dashboard' },
		},
		{
			title: 'Training',
			icon: 'fa-li-projector-screen',
			routeMatcher: ['.*/training/.*'],
			children: [
				{
					title: 'Training Plans List',
					children: [
						{
							title: 'Training Plans',
							url: 'https://elevate.flqa.net/training/plans',
							component: { stateName: 'trainingPlans' },
						},
					],
				},
				{
					title: 'Training Review Dashboard',
					url: 'https://elevate.flqa.net/training/dashboard/admin',
					component: { stateName: 'trainingDashboardAdmin' },
				},
			],
		},
		{
			title: 'Calibration',
			icon: 'fa-li-settings-sliders',
			routeMatcher: ['.*/calibration/.*'],
			children: [
				{
					title: 'Calibration Plans List',
					url: 'https://elevate.flqa.net/calibration/plans',
					component: { stateName: 'calibrationPlans' },
				},
			],
		},
		{
			title: 'User-Created Plans',
			icon: 'fa-li-catalog',
			url: 'https://elevate.flqa.net/usercreated/plans',
			routeMatcher: ['/usercreated/plans'],
			component: { stateName: 'userCreatedPlans' },
		},
		{
			title: 'Bundles',
			icon: 'fa-li-bundles',
			routeMatcher: ['/bundles'],
			url: 'https://elevate.flqa.net/bundles',
			component: { stateName: 'bundles' },
		},
		{
			title: 'Reports',
			icon: 'fa-li-reports',
			routeMatcher: ['.*/reports/.*'],
			children: [
				{
					title: 'REPORTS',
					children: [
						{
							title: 'All Evidence by Indicator',
							url: 'https://elevate.flqa.net/reports/all-evidence-by-indicator',
							component: { stateName: 'reports.allEvidenceByIndicator' },
						},
						{
							title: 'All Evidence by Participant',
							url: 'https://elevate.flqa.net/reports/all-evidence-by-participant',
							component: { stateName: 'reports.allEvidenceByParticipant' },
						},
						{
							title: 'All Scores by Plan',
							url: 'https://elevate.flqa.net/reports/all-scores-by-plan',
							component: { stateName: 'reports.allScoresByPlan' },
						},
						{
							title: 'Calibrated Participants by Attempt',
							url: 'https://elevate.flqa.net/reports/calibrated-participants-by-attempt',
							component: { stateName: 'reports.calibratedParticipantsByAttempt' },
						},
						{
							title: 'Feedback By Plan',
							url: 'https://elevate.flqa.net/reports/feedback-by-plan',
							component: { stateName: 'reports.feedbackByPlan' },
						},
						{
							title: 'Feedback By Participant',
							url: 'https://elevate.flqa.net/reports/feedback-by-participant',
							component: { stateName: 'reports.feedbackByParticipant' },
						},
						{
							title: 'Organization Threshold',
							url: 'https://elevate.flqa.net/reports/organization-threshold',
							component: { stateName: 'reports.organizationThreshold' },
						},
						{
							title: 'Participant Scores',
							url: 'https://elevate.flqa.net/reports/stronge-participant-scores',
							component: { stateName: 'reports.strongeParticipantScores' },
						},
						{
							title: 'Participant Score',
							url: 'https://elevate.flqa.net/reports/participant-score-by-participant',
							component: { stateName: 'reports.participantScoreByParticipant' },
						},
						{
							title: 'Participant Score by Plan',
							url: 'https://elevate.flqa.net/reports/participant-score-by-plan',
							component: { stateName: 'reports.participantScoreByPlan' },
						},
						{
							title: 'Participant Status By Plan',
							url: 'https://elevate.flqa.net/reports/participant-status-by-plan',
							component: { stateName: 'reports.participantStatusByPlan' },
						},
						{
							title: 'Status by Participant',
							url: 'https://elevate.flqa.net/reports/status-by-participant',
							component: { stateName: 'reports.participantStatus' },
						},
						{
							title: 'Summative Report',
							url: 'https://elevate.flqa.net/reports/summative-report',
							component: { stateName: 'reports.summativeReport' },
						},
						{
							title: 'Training System Feedback',
							url: 'https://elevate.flqa.net/reports/cde-training-end-survey',
							component: { stateName: 'reports.cdeTrainingEndSurvey' },
						},
						{
							title: 'Admin Log',
							url: 'https://elevate.flqa.net/reports/admin-log',
							component: { stateName: 'reports.adminLog' },
						},
					],
				},
			],
		},
		{
			title: 'Settings',
			icon: 'fa-li-settings',
			routeMatcher: ['.*/admin/.*'],
			children: [
				{
					title: 'View Options',
					children: [
						{ title: 'Layout (view by Tile)', extEvent: 'layoutTile' },
						{ title: 'Layout (view by Table)', extEvent: 'layoutTable' },
					],
				},
				{
					title: 'Settings',
					children: [
						{
							title: 'Rubrics',
							url: 'https://elevate.flqa.net/admin/rubrics',
							component: { stateName: 'adminRubrics' },
						},
						{
							title: 'Calibration Metrics',
							url: 'https://elevate.flqa.net/admin/calibration-metrics',
							component: { stateName: 'adminCalibrationMetrics' },
						},
						{
							title: 'Video Libraries',
							url: 'https://elevate.flqa.net/admin/video-libraries',
							component: { stateName: 'adminVideoLibraries' },
						},
						{
							title: 'Artifacts',
							url: 'https://elevate.flqa.net/admin/artifacts',
							component: { stateName: 'adminArtifacts' },
						},
					],
				},
				{
					title: 'Plans',
					children: [
						{
							title: 'Plan Settings',
							url: 'https://elevate.flqa.net/admin/plan-settings',
							component: { stateName: 'adminPlanSettings' },
						},
						{
							title: 'Assignments',
							url: 'https://elevate.flqa.net/admin/assignments',
							component: { stateName: 'adminAssignments' },
						},
						{
							title: 'Bundles',
							url: 'https://elevate.flqa.net/admin/bundles',
							component: { stateName: 'adminBundles' },
						},
					],
				},
				{
					title: 'Admins',
					children: [
						{ title: 'Users', url: 'https://elevate.flqa.net/admin/users', component: { stateName: 'adminUsers' } },
						{
							title: 'Application Access',
							url: 'https://elevate.flqa.net/admin/app-access',
							component: { stateName: 'adminAppAccess' },
						},
						{ title: 'Plans', url: 'https://elevate.flqa.net/admin/plans', component: { stateName: 'adminPlans' } },
						{ title: 'Org', url: 'https://elevate.flqa.net/admin/org', component: { stateName: 'adminOrg' } },
						{
							title: 'Employee Resources',
							url: 'https://elevate.flqa.net/admin/resources',
							component: { stateName: 'dashboardSettings' },
						},
						{
							title: 'Settings',
							url: 'https://elevate.flqa.net/admin/settings',
							component: { stateName: 'adminSettings' },
						},
						{
							title: 'Email Templates',
							url: 'https://elevate.flqa.net/admin/email-templates',
							component: { stateName: 'adminEmailTemplates' },
						},
					],
				},
			],
		},
		{
			title: 'Inbox',
			icon: 'fa-li-form-inbox',
			badgeEvent: 'inbox-count',
			routeMatcher: ['/messages'],
			url: 'https://elevate.flqa.net/messages',
			component: { stateName: 'messages' },
		},
	];
};