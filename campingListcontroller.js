({
	clickCreateCamp : function(component, event, helper) {
		var validCamp = true;
        //validation
       var nameField = component.find("campname");
       var campname = nameField.get("v.value");
       var quantField = component.find("campquantity");
       var campquantity = quantField.get("v.value");
       var priceField = component.find("campprice");
       var campprice = priceField.get("v.value");
       
        
        if($A.util.isEmpty(campname)) {
            validCamp = false;
            nameField.set("v.errors",[{message: "Camp name can't be blank"}]);
        }
        else if($A.util.isEmpty(campquantity)) {
            validCamp = false;
            quantField.set("v.errors", [{message: "Camp quantity field can't be blank"}]);
        }
            else if($A.util.isEmpty(campprice)) {
                validCamp = false;
                priceField.set("v.errors", [{message: "Camp price field can't be blank"}]);
            }
                else {
                 nameField.set("v.errors", null);
                 quantField.set("v.errors", null);
                 priceField.set("v.errors", null);
                  
                }
        if(validCamp) {
            //create it
           var newCamp = component.get("v.newCamp");
            console.log("co wciskamy: " + JSON.stringify(newCamp));
            helper.createCamp(component, newCamp);
           
        }
        
        
	}
})