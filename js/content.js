var comment_data;
var emote_data;
var filters;

function inject(){
    console.log("injecting");
    
    var video_div = [undefined];
    while(video_div[0] == undefined)
    {
        video_div = document.getElementsByClassName("channel-root__player-container tw-pd-b-2");
    }

    var emote_root_div = document.createElement("div");
    emote_root_div.id = "Emote_Only_Mode";

    var left_pane_div = document.createElement("div");
    left_pane_div.className = "pane";
    left_pane_div.id = "pane_left";

    var left_header_div = document.createElement("div");
    left_header_div.className = "pane_header";

    var emote_timeline_h1 = document.createElement("h1");
    emote_timeline_h1.className = "emote";
    emote_timeline_h1.innerHTML = "Emote Timeline";

    var svg_div = document.createElement("div");
    svg_div.className = "pane_body";
    svg_div.id = "svg_div";

    var svg_tag = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg_tag.id = "d3";

    var right_pane_div = document.createElement("div");
    right_pane_div.className = "pane";
    right_pane_div.id = "pane_right";

    var emotes_div = document.createElement("div");
    emotes_div.id = "emotes";

    var right_header_div = document.createElement("div");
    right_header_div.className = "pane_header";

    var div = document.createElement("div");

    var top_emotes_h1 = document.createElement("h1");
    top_emotes_h1.className = "emote";
    top_emotes_h1.innerHTML = "Top Emotes";

    var last_10_sec_h3 = document.createElement("h3");
    last_10_sec_h3.className = "emote";
    last_10_sec_h3.id = "emote_list_timestamp"

    var top_emotes_hint = document.createElement("text");
    top_emotes_hint.innerHTML = "Click anywhere on the timeline to see top emotes."

    var filter_button = document.createElement("button");
    filter_button.className = "emote";
    filter_button.id = "tofilters_button";

    var button_span = document.createElement("span");
    button_span.className = "emote";
    button_span.innerHTML = "Emote Filters";

    var emotes_list_body_div = document.createElement("div");
    emotes_list_body_div.className = "pane_body";

    var emotes_list_div = document.createElement("div");
    emotes_list_body_div.id = "emotes_list";
    
    var filter_div = document.createElement("div");
    filter_div.id = "filters";
    var filter_header = document.createElement("div");
    filter_header.className = "pane_header";
    var filter_div2 = document.createElement("div");
    
    var filter_h1 = document.createElement("h1");
    filter_h1.className = "emote";
    filter_h1.innerHTML = "Emote Filters";
    /*var filter_h3 = document.createElement("h3");
    filter_h3.className = "emote";
    filter_h3.innerHTML = "Click to Select/Deselect";*/
    
    var emotes_button = document.createElement("button");
    emotes_button.className = "emote";
    emotes_button.id = "toemotes_button";
    
    var button_span2 = document.createElement("span");
    button_span2.className = "emote";
    button_span2.innerHTML = "Top Emotes";
    
    var filter_body = document.createElement("div");
    filter_body.className = "pane_body";
    filter_body.id = "filter_body";
    
    // TODO, CREATE BODY FOR FILTER

    video_div[0].appendChild(emote_root_div);

    emote_root_div.appendChild(left_pane_div);
    emote_root_div.appendChild(right_pane_div);

    left_pane_div.appendChild(left_header_div)
    left_pane_div.appendChild(svg_div);
    left_header_div.appendChild(emote_timeline_h1);
    svg_div.appendChild(svg_tag);

    var spinner = document.createElement("div");
    spinner.className = "lds-ring-container";
    spinner.innerHTML = "<div class='lds-ring'><div></div><div></div><div></div><div></div></div>";
    var spinner_text = document.createElement("div");
    spinner_text.id = "error_msg";
    spinner.appendChild(spinner_text);
    left_pane_div.appendChild(spinner);

    right_pane_div.appendChild(emotes_div);
    emotes_div.appendChild(right_header_div);
    emotes_div.appendChild(emotes_list_body_div);

    right_header_div.appendChild(div);
    right_header_div.appendChild(filter_button);
    div.appendChild(top_emotes_h1);
    div.appendChild(last_10_sec_h3);
    filter_button.appendChild(button_span);

    emotes_list_body_div.appendChild(emotes_list_div);
    emotes_list_div.appendChild(top_emotes_hint);
    
    right_pane_div.appendChild(filter_div);
    filter_div.appendChild(filter_header);
    
    filter_header.appendChild(filter_div2);
    filter_div2.appendChild(filter_h1);
    //filter_div2.appendChild(filter_h3);
    filter_header.appendChild(emotes_button);
    emotes_button.appendChild(button_span2);
    
    filter_div.appendChild(filter_body);
    
    // Right pane view change code.
    var emotes = document.getElementById("emotes");
    var filters = document.getElementById("filters");

    var tofilters_button = document.getElementById("tofilters_button");
    tofilters_button.onclick = function() {
        emotes.style.display = "none";
        filters.style.display = "flex";
    }
    var toemotes_button = document.getElementById("toemotes_button");
    toemotes_button.onclick = function() {
        filters.style.display = "none";
        emotes.style.display = "flex";
    }

}

/*
	Write additional code below here.
*/

// Preprocessed data. Assign it to a variable by doing `var data = { ...data formatted as a JS object... };`.

// D3 visualization. To get the SVG object for the visualization, do `var name = document.getElementById("d3");`.
/*
	To get access to the words and word counts on the right pane, do `document.getElementById("word_#")` and `document.getElementById("word_#_count")` respectively, where # is from 1-5 inclusive. Edit their contents by doing the `element.innerHTML = "string";`.

	Emotes are usually 28px by 28px. I would give room for 10px of space between the top of a bar and an emote. You can get the height of the SVG object by using `element.getBoundingClientRect()` which has a `.width` and `.height` property. There's also `element.offsetWidth` and `element.offsetHeight`. I would check the Mozilla documentation to figure out which to use.

	https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
	https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

	Generally it seems like getBoundingClientRect is the way to go since it's render size.
*/

function createTimeline() {
    var d3_width = document.getElementById("d3").getBoundingClientRect().width;
    var d3_height = document.getElementById("d3").getBoundingClientRect().height;
    // Check your console. Should be some width and a height of probably 170 px. This is just debug code so remove it later
    console.log(d3_width + ", " + d3_height);
        
    var margin = {top: 2, right: 0, bottom: 20, left: 20},
    width = d3_width - margin.left - margin.right,
    height = d3_height - margin.top - margin.bottom;

    var x = d3.scaleLinear()
        .domain([0, comment_data[Object.keys(comment_data).length-1].content_offset_seconds])
        .range([0, width]);

    var y = d3.scaleLinear()
            .domain([0, d3.max(comment_data, function(d) {
                var total = 0
                for (var key in d.emotes) {
                    if(filters.includes(key)) {
                        total += d.emotes[key];
                    }
                }
                return total;
            })])
            .range([height, 0]);

    var xAxis = d3.axisBottom(x);

    var yAxis = d3.axisLeft(y);
        
    xAxis.tickFormat(formatTime);
        
    yAxis.tickFormat(d3.format("d"));

    var area = d3.area()
        .x(function(d) { return x(d.content_offset_seconds); })
        .y0(height)
        .y1(function(d) {
            var total = 0;
            for (var key in d.emotes) {
                if(filters.includes(key)) {
                    total += d.emotes[key];
                }
            }
            return y(total);
        });

    var svg = d3.select("svg#d3")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("viewBox", "0 0 " + (width + margin.left + margin.right + 2) + " " + (height + margin.top + margin.bottom)) // adjust viewBox to scale svg.
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .attr("overflow", "visible");

    svg.append("path")
            .datum(comment_data)
            .attr("class", "area")
            .attr("d", area);

    svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
            
    svg.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(0 ,0)")
            .call(yAxis);

    var circle = svg.append("g")
        .attr("class", "focus")
        .style("display", "none");
        
    circle.append("circle")
        .attr("r", 4.5);

    var focus = svg.append("g")
        .attr("class", "focus")
        .style("display", "none");

    focus.append("image")
        .attr("x", 0)
        .attr("y", 0)
        .attr("id", "emote1")
        .attr("height", "25px")
        .attr("width", "25px");
        
    focus.append("text")
        .attr("x", 30)
        .attr("y", 20)
        .attr("fill", "currentColor")
        .attr("id", "emoteCount1");

    focus.append("image")
        .attr("x", 0)
        .attr("y", 30)
        .attr("id", "emote2")
        .attr("height", "25px")
        .attr("width", "25px");
        
    focus.append("text")
        .attr("x", 30)
        .attr("y", 50)
        .attr("fill", "currentColor")
        .attr("id", "emoteCount2");

    focus.append("image")
        .attr("x", 0)
        .attr("y", 60)
        .attr("id", "emote3")
        .attr("height", "25px")
        .attr("width", "25px");
        
    focus.append("text")
        .attr("x", 30)
        .attr("y", 80)
        .attr("fill", "currentColor")
        .attr("id", "emoteCount3");

    focus.append("text")
        .attr("x", 0)
        .attr("y", 100)
        .attr("fill", "currentColor")
        .attr("id", "timestamp");
        
    svg.append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function() { circle.style("display", null); focus.style("display", null); })
        .on("mouseout", function() { circle.style("display", "none"); focus.style("display", "none") })
        .on("mousemove", function() {
            var x0 = x.invert(d3.mouse(this)[0]);
            focus.select("text").text("");
            var prev = 0,
                curr = null,
                index = 0;
            for (var key in comment_data) {
                curr = comment_data[key].content_offset_seconds;
                if (x0 > prev && x0 <= curr) {
                    if (x0 - prev < curr - x0) {
                        index = key - 1;
                    } else {
                        index = key;
                    }
                    break;
                }
                prev = curr;
            }
            var total = 0;
            if(comment_data[index] != undefined) {
                for (var key in comment_data[index].emotes) {
                    if (filters.includes(key)) {
                        total += comment_data[index].emotes[key];
                    }
                }
            }
            emote_string = "";
            emotes = ["", "", ""];
            emote_count = [0, 0, 0];
            for (var i = 0; i < 3; i++) {
                if (comment_data[index] != undefined) {
                    for (var key in comment_data[index].emotes) {
                        if (filters.includes(key)) {
                            var count = comment_data[index].emotes[key];
                            if (count > emote_count[i] && emotes.indexOf(emote_data[key].link) == -1) {
                                emotes[i] = emote_data[key].link;
                                emote_count[i] = count;
                            }
                        }
                    }
                }
            }
            if (comment_data[index] != undefined) {
                var xpos = x(comment_data[index].content_offset_seconds);
                var ypos = y(total) - 100;

                if (xpos < width - 50) {
                    xpos = xpos + 15;
                }
                else {
                    xpos = xpos - 50;
                }
                if (ypos < 0) {
                    ypos = 0;
                }
                circle.attr("transform", "translate(" + x(comment_data[index].content_offset_seconds) + "," + y(total) + ")");
                focus.attr("transform", "translate(" + xpos + "," + ypos+ ")");
                focus.select("#emote1").attr("xlink:href", emotes[0]);
                focus.select("#emoteCount1").text(emote_count[0]);
                focus.select("#emote2").attr("xlink:href", emotes[1]);
                focus.select("#emoteCount2").text(emote_count[1]);
                focus.select("#emote3").attr("xlink:href", emotes[2]);
                focus.select("#emoteCount3").text(emote_count[2]);
                focus.select("#timestamp").text(formatTime(comment_data[index].content_offset_seconds));
            }
        })
        .on("click", function() {            
            var x0 = x.invert(d3.mouse(this)[0]);
            var prev = 0,
                curr = null,
                index = 0;
            for (var key in comment_data) {
                curr = comment_data[key].content_offset_seconds;
                if (x0 > prev && x0 <= curr) {
                    if (x0 - prev < curr - x0) {
                        index = key - 1;
                    } else {
                        index = key;
                    }
                    break;
                }
                prev = curr;
            }

            document.getElementById("emote_list_timestamp").innerHTML = formatTime(comment_data[index].content_offset_seconds);

            var sorted_emotes = Object.keys(comment_data[index].emotes).map(function(key) {
                return [key, comment_data[index].emotes[key]];
            });
            sorted_emotes.sort(function(first, second) {
                return second[1] - first[1];
            });

            var emotes_list = document.getElementById("emotes_list");   
            while(emotes_list.firstChild) {
                emotes_list.removeChild(emotes_list.firstChild);
            }
            for (var i = 0; i < sorted_emotes.length; i++) {
                var key = sorted_emotes[i][0];
                var count = sorted_emotes[i][1];
                var emote_url = emote_data[key].link;

                var emote_entry = document.createElement("div");
                emote_entry.className = "emote_entry";

                var emote_rank = document.createElement("div");
                emote_rank.innerHTML = (i+1) + ". ";

                var emote_img = document.createElement("img");
                emote_img.src = emote_url;
                emote_img.alt = key;

                var emote_count = document.createElement("div");
                emote_count.className = "emote_count";
                emote_count.innerHTML = count;

                emotes_list.appendChild(emote_entry);
                emote_entry.appendChild(emote_rank);
                emote_rank.appendChild(emote_img);
                emote_entry.appendChild(emote_count);
            }
            // Old Code
            //embed.player.seek(comment_data[index].content_offset_seconds);
            /*
            var words = ["", "", "", "", ""];
            var word_count = [0, 0, 0, 0, 0];
            for (var i = 0; i < 5; i++) {
                for (var key in comment_data[index].words) {
                    var count = comment_data[index].words[key];
                    if (count > word_count[i] && words.indexOf(key) == -1) {
                        words[i] = key;
                        word_count[i] = count;
                    }
                }
            }
            document.getElementById("word_1").innerHTML = words[0];
            document.getElementById("word_2").innerHTML = words[1];
            document.getElementById("word_3").innerHTML = words[2];
            document.getElementById("word_4").innerHTML = words[3];
            document.getElementById("word_5").innerHTML = words[4];
            document.getElementById("word_1_count").innerHTML = word_count[0];
            document.getElementById("word_2_count").innerHTML = word_count[1];
            document.getElementById("word_3_count").innerHTML = word_count[2];
            document.getElementById("word_4_count").innerHTML = word_count[3];
            document.getElementById("word_5_count").innerHTML = word_count[4];*/
        });
    
}
        
function formatTime(d) {

    function padLeft(num) {
        return ("00"+num).slice(-2);
    }

    var hours = Math.floor(d / 3600),
    d = (d - (hours * 3600));
    var minutes = Math.floor(d / 60);
    var seconds = d - (minutes * 60);
    var output = hours+':'+padLeft(minutes)+':'+padLeft(seconds);
    return output;
}

function injectFilters() {
    var filter_body = document.getElementById("filter_body");
    
    var button_div = document.createElement("div");
    button_div.className = "emote";
    button_div.id = "selection_buttons";
    
    var select_all = document.createElement("button");
    select_all.className = "emote";
    select_all.style.display = "inline-block";
    var all_span = document.createElement("span");
    all_span.innerHTML = "Select All";
    select_all.appendChild(all_span);
    select_all.onclick = function() {
        checkboxes = document.getElementsByClassName("emote_checkbox");
        for(i in checkboxes) {
            checkboxes[i].checked = true;
        }
    };

    var select_none = document.createElement("button");
    select_none.className = "emote";
    select_none.style.display = "inline-block";
    var none_span = document.createElement("span");
    none_span.innerHTML = "Select None";
    select_none.appendChild(none_span);
    select_none.onclick = function() {
        checkboxes = document.getElementsByClassName("emote_checkbox");
        for(i in checkboxes) {
            checkboxes[i].checked = false;
        }
    }
    
    filter_body.appendChild(button_div);
    button_div.appendChild(select_all);
    button_div.appendChild(select_none);
    
    var form = document.createElement("form");
    filter_body.appendChild(form);
    count = 0;
    for(var key in emote_data) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "emote_checkbox";
        checkbox.name = key;
        checkbox.checked = true;
        form.append(checkbox);
        
        var img = document.createElement("img");
        img.id = key;
        img.src = emote_data[key].link;
        img.style.padding_left = "5px";
        form.appendChild(img);
        
        count += 1;
        if(count % 4 == 0) {
            var br = document.createElement("br");
            form.appendChild(br);
        }
    }
    
    var apply = document.createElement("button");
    apply.className = "emote";
    var apply_span = document.createElement("span");
    apply_span.innerHTML = "Apply";
    apply.appendChild(apply_span);
    
    apply.onclick = function() {
        create_filters();
        remove("d3");
        var svg_tag = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg_tag.id = "d3";
        document.getElementById("svg_div").appendChild(svg_tag);
        createTimeline();
    };
    filter_body.append(apply);
}

function remove(elementId) {
    let elem = document.getElementById(elementId);
    if (elem) {
        elem.parentNode.removeChild(elem);
    }
}

function create_filters() {
    filters = [];
    checkboxes = document.getElementsByClassName("emote_checkbox");
    //console.log(checkboxes);
    for(i in checkboxes) {
        c = checkboxes[i];
        if (c.checked == true) {
            filters.push(c.name);
            //console.log(c.name);
        }
    }
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Message receieved");
        if (request.command == "inject") {
            inject();
        }
        if (request.command == "remove") {
            remove("Emote_Only_Mode");
        }
        if(request.command == "injected?") {
            console.log("injected?");
            if (document.getElementById("Emote_Only_Mode")) {
                console.log("Yes");
                sendResponse("Yes");
            } else {
                console.log("No");
                sendResponse("No");
            }
        }
        if (request.command == "loadComments") {
            try {
                comment_data = request.data.comments;
                emote_data = request.data.emotes;
                console.log(emote_data);
                injectFilters();
                create_filters();
                createTimeline();
            }
            catch {
                document.getElementById("error_msg").innerHTML = "Error";
            }
            finally {
                let spinner = document.getElementsByClassName("lds-ring")[0];
                spinner.style.display = "none";
            }
        }
});