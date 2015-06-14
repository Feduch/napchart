/**

This module handles all dom event listening

Requires jQuery

**/

window.dom=(function(){
	//private


	//public:
	return{
		initialize:function(){
			document.getElementById('addCore').addEventListener('click',function(){
				barhandler.addBar("core");
			});

			document.getElementById('addNap').addEventListener('click',function(){
				barhandler.addBar("nap");
			});

			document.getElementById('addBusy').addEventListener('click',function(){
				barhandler.addBar("busy");
			});

			document.getElementById('removeAll').addEventListener('click',function(){
				barhandler.removeAllBars();
			});
		},

		bindRemoveButtons:function(container){
			$(container).on('click','.remove',function(){
				var classes, myClass, name, count;

				name = $(this).parent().find('[name="name"]').val();
				count = $(this).parent().find('[name="count"]').val();
				console.log(name,count)
				if(interactCanvas.isSelected(name,count)){
					interactCanvas.deselect();
				}
				napchartCore.removeElement(name,count);
			});
		},

		bindHoverOnFormInput:function(container){
			$(container).on('mouseenter','.inputBox',function(){
				name = $(this).find('[name="name"]').val();
				count = $(this).find('[name="count"]').val();
				interactCanvas.setHoverElement({
					name:name,
					count:count,
					type:'whole'
				});
				draw.drawUpdate();
			});
		}
		
	}

}())

	




