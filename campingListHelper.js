({
	createCamp : function(component, camp) {
		var currentCamp = component.get("v.items");
        var newCamp = JSON.parse(JSON.stringify(camp));
        currentCamp.push(newCamp);
        component.set("v.items", currentCamp);
        console.log("current state: " + JSON.stringify(currentCamp));
        component.set("v.newCamp", [{ 'sobjectType': 'Camping_Item1__c',
                    'Name': ' ',
                    'Quantity__c': 0,
                    'Price__c': 0,
                    'Packed__c': false }] );
       
        
	}
})