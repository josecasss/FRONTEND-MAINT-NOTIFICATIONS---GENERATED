sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"maintnotification/test/integration/pages/MaintNotificationList.gen",
	"maintnotification/test/integration/pages/MaintNotificationObjectPage.gen",
	"maintnotification/test/integration/pages/MaintItemObjectPage.gen"
], function (JourneyRunner, MaintNotificationListGenerated, MaintNotificationObjectPageGenerated, MaintItemObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('maintnotification') + '/test/flp.html#app-preview',
        pages: {
			onTheMaintNotificationListGenerated: MaintNotificationListGenerated,
			onTheMaintNotificationObjectPageGenerated: MaintNotificationObjectPageGenerated,
			onTheMaintItemObjectPageGenerated: MaintItemObjectPageGenerated
        },
        async: true
    });

    return runner;
});

