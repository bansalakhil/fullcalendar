// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function moveEvent(event, dayDelta, minuteDelta, allDay){
    jQuery.ajax({
        data: 'id='+event.id+'&title='+event.title+'&day_delta='+dayDelta+'&minute_delta='+minuteDelta+'&all_day='+allDay,
        dataType: 'script',
        type: 'post',
        url: "/events/move"
    });  
}

function resizeEvent(event, dayDelta, minuteDelta){
    jQuery.ajax({
        data: 'id='+event.id+'&title='+event.title+'&day_delta='+dayDelta+'&minute_delta='+minuteDelta,
        dataType: 'script',
        type: 'post',
        url: "/events/resize"
    });  
}
