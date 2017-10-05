var myObj = {
	MSG: "Hello World!",	
	hideMessage: function() {
		 $( "#pMsg" ).html("");
	},
	showMessage: function() {
       $( "#pMsg" ).html(MSG); 
     },

   setUpHTMLFixture: function () {alert("setfix def");debugger;
		jasmine.getFixtures();
		loadFixtures('<form id="testForm" action="">'
                  +'  <h1>Test Form</h1>'
                  +'  <input type="text" id="txtMessage">'
                  +'  <br>'
                  +'  <button id="btnHideMessage" type="button" onclick="hideMessage()">Hide Message</button>'
                  +'  <button id="btnShowMessage" type="button" onclick="showMessage()">Show Message</button>'
                  +'  <br>'
                  +'  <p id="pMsg"></p>'
                  +'</form>');   
    }
}
describe("DOM TESTS:***************", function() { debugger;
  describe("Button Click Event Tests", function() {
    var spyEvent;
       
    beforeEach(function() {//alert("2");debugger;
      setUpHTMLFixture();
    });
       
    it ("should invoke the btnShowMessage click event.", function() {
      spyEvent = spyOnEvent('#btnShowMessage', 'click');
      $('#btnShowMessage').trigger( "click" );
           
      expect('click').toHaveBeenTriggeredOn('#btnShowMessage');
      expect(spyEvent).toHaveBeenTriggered();
    });
       
    it ("should invoke the btnHideMessage click event.", function() {
      spyEvent = spyOnEvent('#btnHideMessage', 'click');
      $('#btnHideMessage').trigger( "click" );
           
      expect('click').toHaveBeenTriggeredOn('#btnHideMessage');
      expect(spyEvent).toHaveBeenTriggered();
    });
  });
       
  describe("Show message tests", function() {
    beforeEach(function() {
      setUpHTMLFixture();
      $('#txtMessage').val(MSG);
      $('#btnShowMessage').trigger( "click" );
    });
     
    it ("should display the message when button is clicked.", function() {
      expect($('#pMsg')).toHaveText($('#txtMessage').val());
    });
  });
    
  describe("Hide message tests", function() {
    beforeEach(function() {
      setUpHTMLFixture();
      $('#pMsg').text(MSG);
      $('#btnHideMessage').trigger( "click" );
    });
     
    it ("should remove the message when button is clicked.", function() {
      expect($('#pMsg')).toHaveText("");
    });
  });
});

