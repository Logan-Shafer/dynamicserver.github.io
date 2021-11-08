<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <title>US Energy Consumption</title>
    <link rel="stylesheet" href="css/style.css">
    <script type="application/javascript">
        // `state` and arrays of consumption per year => set these variables equal to appropriate value
        //   * these variables will be defined and accessible from any script loaded after this one
        var state = {{{STATE}}};
        var coal_counts = {{{COAL_COUNTS}}};               // array - value per year (e.g. [1234, 2567, ...])
        var natural_gas_counts = {{{NATURAL_GAS_COUNTS}}}; // array - value per year (e.g. [1234, 2567, ...])
        var nuclear_counts = {{{NUCLEAR_COUNTS}}};         // array - value per year (e.g. [1234, 2567, ...])
        var petroleum_counts = {{{PETROLEUM_COUNTS}}};     // array - value per year (e.g. [1234, 2567, ...])
        var renewable_counts = {{{RENEWABLE_COUNTS}}};     // array - value per year (e.g. [1234, 2567, ...])
    </script>
</head>
<body >
    <!-- percent stacked area chart -->
    <label for="viewBy" id="viewLabel">Choose whether to view by year, state, or energy source</label>

    <select name="viewBy" id="viewBy">
        <option value="year">Year</option>
        <option value="state">State</option>
        <option value="energy">Energy Source</option>
    </select>
    <button id="submit" type="button">Submit</button>

    <label for="chooseYear" id="yearLabel" style="visibility: hidden;">Choose Year</label>

    <input id="chooseYear" type="text" style="visibility: hidden;"/>

    <button id="submitYear" type="button" style="visibility: hidden;">Submit</button>



    <label for="chooseState" id="stateLabel" style="visibility: hidden;">Choose State</label>

    <select name="chooseState" id="chooseState" style="visibility: hidden;">
        <option value="AK">Alaska</option>
        <option value="AL">Alabama</option>
        <option value="AR">Arkansas</option>
        <option value="AZ">Arizona</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DC">District of Columbia</option>
        <option value="DE">Deleware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="IA">Iowa</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="MA">Massachusetts</option>
        <option value="MD">Maryland</option>
        <option value="ME">Maine</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MO">Missouri</option>
        <option value="MS">Mississippi</option>
        <option value="MT">Montana</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="NE">Nebraska</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NV">Nevada</option>
        <option value="NY">New York</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VA">Virginia</option>
        <option value="VT">Vermont</option>
        <option value="WA">Washington</option>
        <option value="WI">Wisconsin</option>
        <option value="WV">West Virginia</option>
        <option value="WY">Wyoming</option>
        
    </select>

    <button id="submitState" type="button" style="visibility: hidden;">Submit</button>



    <label for="chooseEnergy" id="energyLabel" style="visibility: hidden;">Choose Energy Source</label>

    <select name="chooseEnergy" id="chooseEnergy" style="visibility: hidden;">
        <option value="coal">Coal</option>
        <option value="natural_gas">Natural Gas</option>
        <option value="nuclear">Nuclear</option>
        <option value="petroleum">Petroleum</option>
        <option value="renewable">Renewable</option>
    </select>

    <button id="submitEnergy" type="button" style="visibility: hidden;">Submit</button>
    
    <button id="swapName" type="button">Swap to Abbreviations</button>
    <button id="swapAbbreviation" type="button">Swap to Full Names</button>

    <button id="prev" type="button">previous</button>
    <button id="next" type="button">next</button>

    <script type="text/javascript">

        document.getElementById("next").onclick = function () {

	    let i;
	    var currentState = window.location.href.split("/")[4];
	    for(i = 0; i < document.getElementById("chooseState").options.length; i++) {
		if(document.getElementById("chooseState").options[i].value == currentState) {
		    if(currentState == "WY") {
			location.href = "http://localhost:8000/state/AK";
		    } else {
		    	location.href = "http://localhost:8000/state/" + document.getElementById("chooseState").options[i+1].value
		    }
		}
	    }
            
        }
        document.getElementById("prev").onclick = function () {
            let i;
	    var currentState = window.location.href.split("/")[4];
	    for(i = 0; i < document.getElementById("chooseState").options.length; i++) {
		if(document.getElementById("chooseState").options[i].value == currentState) {
		    if(currentState == "AK") {
			location.href = "http://localhost:8000/state/WY";
		    } else {
		    	location.href = "http://localhost:8000/state/" + document.getElementById("chooseState").options[i-1].value
		    }
		}
	    }
    
        }

        document.getElementById("swapName").onclick = function () {
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Alaska/g, 'AK');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Alabama/g, 'AL');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Arkansas/g, 'AR');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Arizona/g, 'AZ');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/California/g, 'CA');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Colorado/g, 'CO');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Connecticut/g, 'CT');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/District of Columbia/g, 'DC');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Delaware/g, 'DE');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Florida/g, 'FL');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Georgia/g, 'GA');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Hawaii/g, 'HI');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Iowa/g, 'IA');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Idaho/g, 'ID');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Illinois/g, 'IL');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Indiana/g, 'IN');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Kansas/g, 'KS');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Kentucky/g, 'KY');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Louisiana/g, 'LA');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Massachusetts/g, 'MA');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Maryland/g, 'MD');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Maine/g, 'ME');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Michigan/g, 'MI');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Minnesota/g, 'MN');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Missouri/g, 'MO');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Mississippi/g, 'MS');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Montana/g, 'MT');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/North Carolina/g, 'NC');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/North Dakota/g, 'ND');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Nebraska/g, 'NE');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/New Hampshire/g, 'NH');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/New Jersey/g, 'NJ');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/New Mexico/g, 'NM');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Nevada/g, 'NV');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/New York/g, 'NY');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Ohio/g, 'OH');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Oklahoma/g, 'OK');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Oregon/g, 'OR');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Pennsylvania/g, 'PA');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Rhode Island/g, 'RI');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/South Carolina/g, 'SC');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/South Dakota/g, 'SD');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Tennessee/g, 'TN');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Texas/g, 'TX');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Utah/g, 'UT');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/West Virginia/g, 'WV');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Virginia/g, 'VA');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Vermont/g, 'VT');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Washington/g, 'WA');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Wisconsin/g, 'WI');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/Wyoming/g, 'WY');
        }

        document.getElementById("swapAbbreviation").onclick = function () {
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/AK/g, 'Alaska');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/AL/g, 'Alabama');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/AR/g, 'Arkansas');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/AZ/g, 'Arizona');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/CA/g, 'California');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/CO/g, 'Colorado');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/CT/g, 'Connecticut');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/DC/g, 'District of Columbia');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/DE/g, 'Delaware');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/FL/g, 'Florida');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/GA/g, 'Georgia');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/HI/g, 'Hawaii');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/IA/g, 'Iowa');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/ID/g, 'Idaho');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/IL/g, 'Illinois');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/IN/g, 'Indiana');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/KS/g, 'Kansas');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/KY/g, 'Kentucky');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/LA/g, 'Louisiana');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/MA/g, 'Massachusetts');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/MD/g, 'Maryland');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/ME/g, 'Maine');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/MI/g, 'Michigan');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/MN/g, 'Minnesota');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/MO/g, 'Missouri');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/MS/g, 'Mississippi');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/MT/g, 'Montana');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/NC/g, 'North Carolina');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/ND/g, 'North Dakota');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/NE/g, 'Nebraska');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/NH/g, 'New Hampshire');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/NJ/g, 'New Jersey');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/NM/g, 'New Mexico');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/NV/g, 'Nevada');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/NY/g, 'New York');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/OH/g, 'Ohio');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/OK/g, 'Oklahoma');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/OR/g, 'Oregon');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/PA/g, 'Pennsylvania');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/RI/g, 'Rhode Island');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/SC/g, 'South Carolina');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/SD/g, 'South Dakota');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/TN/g, 'Tennessee');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/TX/g, 'Texas');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/UT/g, 'Utah');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/VA/g, 'Virginia');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/VT/g, 'Vermont');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/WA/g, 'Washington');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/WI/g, 'Wisconsin');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/WV/g, 'West Virginia');
            document.getElementById("stateName").innerHTML = document.getElementById("stateName").innerHTML.replace(/WY/g, 'Wyoming');
        }


        document.getElementById("submit").onclick = function () {
            document.getElementById("viewLabel").style.visibility = "hidden";
            document.getElementById("viewBy").style.visibility = "hidden";
            document.getElementById("submit").style.visibility = "hidden";
            var selected = document.getElementById("viewBy");
            console.log(selected.options[selected.selectedIndex].text);
            if(selected.options[selected.selectedIndex].text == "Year") {
                document.getElementById("yearLabel").style.visibility = "visible";
                document.getElementById("chooseYear").style.visibility = "visible";
                document.getElementById("submitYear").style.visibility = "visible";
            }
            else if(selected.options[selected.selectedIndex].text == "State") {
                document.getElementById("stateLabel").style.visibility = "visible";
                document.getElementById("chooseState").style.visibility = "visible";
                document.getElementById("submitState").style.visibility = "visible";
            }
            else if(selected.options[selected.selectedIndex].text == "Energy Source") {
                document.getElementById("energyLabel").style.visibility = "visible";
                document.getElementById("chooseEnergy").style.visibility = "visible";
                document.getElementById("submitEnergy").style.visibility = "visible";
            }
        };

        document.getElementById("submitYear").onclick = function () {
            location.href = "http://localhost:8000/year/" + document.getElementById("chooseYear").value;
        }

        document.getElementById("submitState").onclick = function () {
            location.href = "http://localhost:8000/state/" + document.getElementById("chooseState").value;
        }

        document.getElementById("submitEnergy").onclick = function () {
            location.href = "http://localhost:8000/energy/" + document.getElementById("chooseEnergy").value;
        }
    </script>

    <!-- create template here -->
    <h1 id="stateName">{{{state here}}}</h1>
    
    <!-- image of state here -->
    <img src = "{{{state image here}}}"/>
    <!-- create table here -->
    <table id="tableData">
        
            <tr>
                <th>
                    year
                </th>
                <th>
                    coal
                </th>
                <th>
                    natural gas
                </th>
                <th>
                    nuclear
                </th>
                <th>
                    petroleum
                </th>
                <th>
                    renewable
                </th>
                <th>
                    total
                </th>
            </tr>
            {{{data here}}}
        
        
    </table>
    
</body>
</html>
