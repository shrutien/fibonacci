// Custom Jquery File
// Author : Viraj
$("#multiple_gen").unbind().submit(function(e){
    e.preventDefault();
    $("#multiple_generator_no_of_instance_").html('');
    var button_val = $('input[type=submit][clicked=true]').val();
    if(button_val == 'Generate'){
        var gen_ids = [];
        var gen_nos = [];
        var button_name = 'generate_button';
        var csrf_token = $('input #csrftoken').val();
        var showAlert = true;
        $('.gen_checkbox').each(function(i){
            if($(this).is(':checked')){
                gen_ids[i] = $(this).val();
                var checkbox_id = $(this).attr('id');
                var input_id = '#multiple_generator_no_of_instance_' + $(this).val();

                gen_nos[i] = $(input_id).val();

                Array.prototype.remove = function(value) {
                    var idx = this.indexOf(value);
                    if (idx != -1) {
                        return this.splice(idx, 1); // The second parameter is the number of elements to remove.
                    }
                    return false;
                };
                var index = gen_nos.indexOf('0');
                $( gen_nos ).find( "0" ).eq( index ).text().replace( 0, 0 );
                if($(input_id).val() == 0){
                    if (showAlert) {
                        alert("No of instance to be generated should be greater then 0.");
                        showAlert = false;
                        e.preventDefault();
                    }
                }
            }else{
                gen_ids[i] = 0;
                gen_nos[i] = 0;

            }
        });
        if($('#multiple_gen input:checkbox:checked').length == 0){
            e.preventDefault();
            alert('You have to select at-least one generator.');
        }
        else{
            create_generator_content(gen_ids, gen_nos, button_name);
        }    }
    if(button_val == 'Save'){
        e.preventDefault();
        create_generator_content(gen_ids, gen_nos, "save_button");
    }
    $("#multiple_gen").get(0).reset();
});
$("form input[type=submit]").unbind().click(function() {
    $("input[type=submit]", $(this).parents("form")).removeAttr("clicked");
    $(this).attr("clicked", "true");
});

$(document).ready(function () {

    $( '.step-links #prev' ).click( function(e) {
        e.preventDefault();
        url = ($( '.step-links #prev' )[0].href);
        ajax_get_update();
    });
    $( '.step-links #next' ).click( function(e) {
        e.preventDefault();
        url = ($( '.step-links #next' )[0].href);
        ajax_get_update();

    });

    $('#id_book_id').change(function(e) {
        $("#id_chapter_id").html('');
        var book_id = $(this).val();
        $.ajax(
            {
                type:"POST",
                dataType:"json",
                url:"get_book_chapters",
                cache: false,
                data: {"book_id": book_id},
                success:function(response)
                {
                    $("#id_chapter_id").append(
                        $("<option selected></option>").val('').html('---Select a Chapter---')
                    );
                    for(var i =0; i < response.length; i++){
                        // $("#id_chapter_id").append("<option value="+response[i].chapter_id+">"+response[i].chapter_name+"</option>");
                        $("#id_chapter_id").append(
                            $("<option></option>").val(response[i].chapter_id).html(response[i].chapter_name)
                        );
                    }
                    $("#chapter_selector").css("display","block");
                }
            });

    });


    $('#id_subject_id').change(function(e) {

        $("#id_category_id").html('');
        var subject_id = $(this).val();
        console.log("Subject Id-----",subject_id);
        if (subject_id == null) {
            console.log('success');
            console.log('subject id not found');}
        $.ajax(
            {
                type:"POST",
                dataType:"json",
                url:"get_subject_category",
                cache: false,
                data: {"subject_id": subject_id},
                success:function(response)
                {

                    $("#id_category_id").append(
                        $("<option selected></option>").val('').html('---Select a Category---')
                    );
                    for(var i =0; i < response.length; i++){
                        $("#id_category_id").append(
                            $("<option></option>").val(response[i].category_id).html(response[i].name)
                        );

                    }
                    $("#category_selector").css("display","block");
                }
            });

    });



    $('#id_category_id').change(function(e) {

        $("#id_gen_id").html('');
        $('#id_total_gen_id').html('');
        var category_id = $(this).val();
        console.log("Category Id-----",category_id);

        $.ajax(
            {
                type:"POST",
                dataType:"json",
                url:"get_category_gen",
                cache: false,
                data: {"category_id": category_id},
                success:function(response)
                {
                    $("#id_gen_id").append(
                        $("<option selected></option>").val('').html('---Select a Generator---')
                    );
                    for(var i =0; i < response.length; i++){
                        $("#id_gen_id").append(
                            $("<option></option>").val(response[i].generator_id).html(response[i].name + '('+ response[i].max_possible_items+')')
                        );


                    }
                    $("#id_total_gen_id").append(
                        $("<b></b>").val('').html(response.length)
                    );

                    $("#gen_selector").css("display","block");
                    $("#gen_selector1").css("display","block");
                    $("#gen_selector2").css("display","block");

                }
            });

    });



    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (settings.type == 'POST' || settings.type == 'PUT' || settings.type == 'DELETE') {
                function getCookie(name) {
                    var cookieValue = null;
                    if (document.cookie && document.cookie != '') {
                        var cookies = document.cookie.split(';');
                        for (var i = 0; i < cookies.length; i++) {
                            var cookie = jQuery.trim(cookies[i]);
                            // Does this cookie string begin with the name we want?
                            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                                break;
                            }
                        }
                    }
                    return cookieValue;
                }
                if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
                    xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
                }
            }
        }
    });

    $('#generated_data_div .success-message').hide();
    $('.question_saved_message').hide();
    // $('a#prev').click(function(e) {
    //     e.preventDefault();
    //     url = ($('.step-links #prev')[0].href);
    //     ajax_get_update();
    // });
    //
    // $('a#next').click(function(e) {
    //     e.preventDefault();
    //     url = ($('.step-links #next')[0].href);
    //     ajax_get_update();
    // });

    $('.input_box .gen_instance').prop('disabled', true);
    $('.gen_instance').val('0');



    $(document).ready(function() {
        $(".gen_checkbox").click(function() {
            if ($(this).is(':checked')) {
                value = $(this).val();
                checkbox_id = $(this).attr('id');
                input_id = '#multiple_generator_no_of_instance_' + value;
                $(input_id).prop('disabled', false);
                gen_nos = $(input_id).val();
            }
            else {
                // $(input_id).attr('value', 0);
                value = $(this).val();
                checkbox_id = $(this).attr('id');
                input_id = '#multiple_generator_no_of_instance_' + value;
                gen_nos = $(input_id).val();
                $(input_id).prop('disabled', false);
                $(input_id).removeAttr('disabled');
                $(input_id).attr('disabled', 'disabled');
                $(input_id).prop('disabled', true);
                $(input_id).attr('value', 0);
                $(gen_nos).attr('value',0);
                $(input_id).val('0');
            }

        });
    });

    // $(document).ready(function() {
    //     $(".gen_checkbox").click(function() {
    //         if ($(this).is(':checked')) {
    //             value = $(this).val();
    //             checkbox_id = $(this).attr('id');
    //             input_id = '#multiple_generator_no_of_instance_' + value;
    //             $(input_id).prop('disabled', false);
    //         }
    //         else {
    //             // $(input_id).attr('value', 0);\
    //             value = $(this).val();
    //             checkbox_id = $(this).attr('id');
    //             input_id = '#multiple_generator_no_of_instance_' + value;
    //             $(input_id).removeAttr('disabled');
    //             $(input_id).attr('disabled', 'disabled');
    //             $(input_id).prop('disabled', true);
    //             // $(input_id).removeAttr('disabled');
    //             // $(input_id).attr('disabled', 'disabled');
    //             // $(input_id).prop('disabled', true);
    //         }
    //
    //     });
    // });


    $('input:checkbox.question-checkbox').click(function(){
        if($(this).is(':checked')) {
            $('#distractors_list').html(" ")
            var placeholders = ['Enter Distractor B', 'Enter Distractor C', 'Enter Distractor D', 'Enter Distractor E'];
            $('.options:text').each(
                function(i,el) {
                    if (el.value) {
                        el.value = ''
                        el.placeholder = placeholders[i];

                    }
                });
            $(this).addClass('active_questions');
            var question = $(this).attr('question');
            var answer = $(this).attr('answer');
            var book_id = $(this).attr('book_id');
            var chapter_id = $(this).attr('chapter_id');
            var section_id = $(this).attr('section_id');
            var item_number = $(this).attr('item_number');
            var question_number = $(this).attr('question_number');
            var question_fact= $(this).attr('original_fact');
            var question_checkbox_id = $(this).attr('id');
            var distractors = $(this).attr('distractors');
            var json_obj = jQuery.parseJSON(distractors);
            var div_content = document.getElementById("distractors_list");
            for(var key in json_obj) {
                var d_lable = document.createElement("H3");
                var t = document.createTextNode(key);
                d_lable.appendChild(t);
                div_content.appendChild(d_lable);
                var listView = document.createElement("UL");
                //var array_val = Array.prototype.slice.call(json_obj[key])
                for (i = 0; i < json_obj[key].length; i++) {
                    var listViewItem=document.createElement('LI');
                    var t1 = document.createTextNode(json_obj[key][i]);
                    listViewItem.appendChild(t1);
                    listView.appendChild(listViewItem);
                }
                div_content.appendChild(listView);
            }
            // $('#distractors_unordered').append(distractors);
            $("input[name='book_id']").val(book_id);
            $("input[name='chapter_id']").val(chapter_id);
            $("input[name='section_id']").val(section_id);
            $("input[name='item_number']").val(item_number);
            $("input[name='question_number']").val(question_number);
            $("input[name='original_fact']").val(question_fact);
            $("input[name='question']").val(question);
            $("input[name='initial_stem']").val(question);
            $("input[name='initial_answer']").val(answer);
            $("input[name='answer']").val(answer);
            $("input[name='distractors']").val(distractors);
            $("input[name='question_checkbox_id']").val(question_checkbox_id);
            $('.question-checkbox').attr('disabled', 'disabled');
            $('.active_questions').removeAttr('disabled', 'disabled');
            $("#popup-box").dialog({
                autoopen: false,
                minWidth: 900,
                modal: true,
                dialogClass: 'question_formation_box',
                draggable: true,
                show: {
                    effect: "fade",
                    duration: 1000
                },
                hide: {
                    effect: "fade",
                    duration: 1000
                },
                position: {
                    my: "center",
                    at: "center",
                    of: window
                },
                title: "Original fact: "+question_fact,
                open: function () {
                    $('.ui-dialog-titlebar-close').addClass('ui-icon ui-icon-closethick');
                },
                close: function() {
                    $('#popup-box').dialog('destroy');
                    $('.question-checkbox').prop('checked', false);
                }
            });

        }
    });

    // $('.created_questions').each(function() {
    //     // $(this).prop('disabled', true);
    //     $(this).attr('disabled', 'disabled');
    // });

    // On dialogclose, enable checkboxes
    $('#popup-box').on('dialogclose', function(event) {
        $('.question-checkbox').removeAttr('disabled', 'disabled');
        $('.active_questions').removeAttr('disabled', 'disabled');
    });

    // On Cancel button click, enable checkboxes
    $('#cancel-button').click(function () {
        if(confirm("Are you sure you want to cancel this question?")){
            $('#popup-box').dialog('close');
            return false;
        }
    });

    // On save button click, disabled clicked checkbox after save
    $('#save-button').click(function () {
        var book_id = $('input[name="book_id"]').val();
        var chapter_id = $('input[name="chapter_id"]').val();
        var section_id = $('input[name="section_id"]').val();
        var item_number = $('input[name="item_number"]').val();
        var question_number = $('input[name="question_number"]').val();
        var question = $('input[name="question"]').val();
        var answer = $('input[name="answer"]').val();
        var feedbacka = $('input[name="feedback_a"]').val();
        var feedbackb = $('input[name="feedback_b"]').val();
        var feedbackc = $('input[name="feedback_c"]').val();
        var feedbackd = $('input[name="feedback_d"]').val();
        var feedbacke = $('input[name="feedback_e"]').val();
        var default_feedback = $('input[name="defaultfeedback"]').val();
        var optionb = $('input[name="optionb"]').val();
        var optionc = $('input[name="optionc"]').val();
        var optiond = $('input[name="optiond"]').val();
        var optione = $('input[name="optione"]').val();
        var checked_box_id = $("input[name='question_checkbox_id']").val();
        var original_fact = $('input[name="original_fact"]').val();
        var initial_stem = $('input[name="initial_stem"]').val();
        var initial_answer = $('input[name="initial_answer"]').val();
        var taxonomy = $("#taxonomy option:selected").val();
        var difficulty = $("#difficulty option:selected").val();
        var learningobj = $('input[name="learningobj"]').val();
        var distractors = $('input[name="distractors"]').val();
        if(optionb == "" || optionc == "" || optiond == "") {
            alert("3 Distractors are mandatory and should be filled sequentially.");
            return false;
        }
        if(answer == optionb || answer == optionc || answer == optiond || answer == optione || optionb == optionc || optionb == optiond || optionb == optione || optionc == optiond || optionc == optione || optiond == optione) {
            alert("None of the option can be same/repetitive");
            return false;
        }
        if((optione != '') && (optionb == '' || optionc == '' || optiond == '')){
            alert("Distractors should be filled sequentially.");
            return false;
        }
        if(taxonomy == ''){
            alert("Please select valid taxonomy.");
            return false;
        }
        if(difficulty == ''){
            alert("Please select valid difficulty level.");
            return false;
        }
        if(learningobj == ''){
            alert("Please enter valid learning objective.");
            return false;
        }

        var questionObj = {
            'book_id':book_id, 'chapter_id':chapter_id, 'section_id':section_id,
            'item_number':item_number, 'question_number':question_number, 'question': question, 'answer': answer, 'feedback_a': feedbacka,
            'optionb': optionb, 'feedback_b': feedbackb, 'optionc': optionc, 'feedback_c': feedbackc,
            'optiond': optiond, 'feedback_d': feedbackd, 'optione': optione, 'feedback_e': feedbacke,
            'default_feedback': default_feedback, 'original_fact': original_fact,
            'initial_stem': initial_stem, 'initial_answer': initial_answer,
            'blooms_level':taxonomy, 'difficulty_level':difficulty, 'learning_objective':learningobj,
            'distractors':distractors
        };

        var $save_success = $('.question_saved_message').hide();
        $.ajax(
            {
                type:"POST",
                dataType:"json",
                url:"save_question",
                cache: false,
                data: questionObj,
                success:function(response)
                {
                    $("#"+checked_box_id).addClass('created_questions').removeClass('question-checkbox').
                    removeClass('active_questions');
                    $('#popup-box').dialog('destroy');
                    $('.question-checkbox').removeAttr('disabled', 'disabled');
                    $('.active_questions').attr('disabled', 'disabled').attr('checked', 'checked');
                    //$("#"+checked_box_id).attr('disabled', 'disabled');
                    $($save_success).append('<p>Question has been saved successfully.</p>');
                    $($save_success).toggle('show');
                    var save_item_id = response.item_id;
                    $('#test_bank_form').append('<input type="hidden" class="testbankids" value='+ response.item_id +' name="item_id_'+ response.item_id +'"/>');

                    setTimeout(function(){
                        $($save_success).fadeOut('slow');
                    },2000);
                    if(jQuery.isEmptyObject(response.optione)){
                        var $row = $('<div style="border: 1px dotted black"><p><b>Book ID: </b>' + response.book_id + '</p><p><b>Chapter ID: </b>' + response.chapter_id + '</p><p><b>Section ID: </b>' + response.section_id + '</p><p><b>Item Number: </b>' + response.item_number + '</p><p><b>Question '+ response.question_number + ':</b>' + response.question + '</p><p><b>Answer : </b>' + response.answer + '</p><p><b>Option B: </b>' + response.optionb + '</p><p><b>Option C: </b>'+ response.optionc + '</p><p><b>Option D: </b>'+ response.optiond + '</p></div>');
                        $('#col2').append($row);
                    }else {
                        var $row = $('<div style="border: 1px dotted black"><p><b>Book ID: </b>' + response.book_id + '</p><p><b>Chapter ID: </b>' + response.chapter_id + '</p><p><b>Section ID: </b>' + response.section_id + '</p><p><b>Item Number: </b>' + response.item_number + '</p><p><b>Question '+ response.question_number + ':</b>' + response.question + '</p><p><b>Answer : </b>' + response.answer + '</p><p><b>Option B: </b>' + response.optionb + '</p><p><b>Option C: </b>'+ response.optionc + '</p><p><b>Option D: </b>'+ response.optiond + '</p><p><b>Option E: </b>'+ response.optione + '</p></div>');
                        $('#col2').append($row);
                    }
                    $('.created_questions').attr('disabled', 'disabled');
                }
            });
        $(function(){
            if($('#test_bank_form').css('display') != 'block'){
                var createdQuestions = setInterval(function(){
                    if($('#col1').find('input.created_questions').length > 0){
                        $('#test_bank_form').css('display','block');
                    }
                });
            }
        });
        return false;
    });

    $('#exportpdf').click(function(){
        $.ajax(
            {
                type:"POST",
                dataType:"json",
                url:"save_testpdf",
                cache: false,
                data: $('#test_bank_form').serialize(),
                success:function(response) {
                    var link=document.createElement('a');
                    link.href=response.filepath;
                    link.download=response.title;
                    link.click();
                }
            });
        return false;
    });

    $('#exportcsv').click(function(){
        $.ajax(
            {
                type:"POST",
                dataType:"json",
                url:"save_testcsv",
                cache: false,
                data: $('#test_bank_form').serialize(),
                success:function(response) {
                    var link=document.createElement('a');
                    link.href=response.filepath;
                    link.download=response.title;
                    link.click();
                }
            });
        return false;
    });

    $('#export_items_csv').click(function(){
        $.ajax(
            {
                type:"POST",
                dataType:"json",
                url:"save_items_csv",
                cache: false,
                data: $('#items_form').serialize(),
                success:function(response) {
                    var link=document.createElement('a');
                    link.href=response.filepath;
                    link.download=response.title;
                    link.click();
                }
            });
        return false;
    });

    $('#popup-box').hide();
    $('#popup-box button.question-save').hide();

    // Question edit
    $('#popup-box a.question-edit').click(function()
    {
        $(this).hide();
        $('#popup-box .question_text').each(function () {
            var content = $(this).html();
            $(this).removeAttr('disabled');
        });
        $('#popup-box button.question-save').show();
    });

    //Question save
    $('#popup-box button.question-save').click(function()
    {
        $('#popup-box button.question-save').hide();
        $('#popup-box .question_text').attr('disabled', 'disabled');
        $('#popup-box a.question-edit').show();
        return false;
    });

    $('#popup-box button.answer-save').hide();

    // Question edit
    $('#popup-box a.answer-edit').click(function()
    {
        $(this).hide();
        $('#popup-box .correct_answer').each(function () {
            var content = $(this).html();
            $(this).removeAttr('disabled');
        });
        $('#popup-box button.answer-save').show();
    });

    //Question save
    $('#popup-box button.answer-save').click(function()
    {
        $('#popup-box button.answer-save').hide();
        $('#popup-box .correct_answer').attr('disabled', 'disabled');
        $('#popup-box a.answer-edit').show();
        return false;
    });

    var $loading = $('#ajax_data_loader').hide();
    $(document)
        .ajaxStart(function () {
            //ajax request went so show the loading image
            $loading.show();
            $(document.body).fadeTo(0, 0.5);
            // $(window).unbind("click", document.body);
            $(window).bind('click', function(e){
               e.preventDefault();
            });
        })
        .ajaxStop(function () {
            //got response so hide the loading image
            $loading.hide();
            $(document.body).fadeTo(0, 1);
            $(window).unbind("click");
        });
});

function create_generator_content(gen_ids, gen_nos, button_name) {
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (settings.type == 'POST' || settings.type == 'PUT' || settings.type == 'DELETE') {
                function getCookie(name) {
                    var cookieValue = null;
                    if (document.cookie && document.cookie != '') {
                        var cookies = document.cookie.split(';');
                        for (var i = 0; i < cookies.length; i++) {
                            var cookie = jQuery.trim(cookies[i]);
                            // Does this cookie string begin with the name we want?
                            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                                break;
                            }
                        }
                    }
                    return cookieValue;
                }
                if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
                    xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
                }
            }
        }
    });
    if(button_name == 'generate_button') {
        var gen_data = JSON.stringify([gen_ids, gen_nos, button_name]);
        $.ajax({
            url: "igapp_multiple",
            type: "POST",
            data: gen_data,
            success: function (data) {
                $('#save_multiple').show();
                $('#generated_data_box').html(data);
            }
        });
    }
    if(button_name == 'save_button'){
        var save_data = JSON.stringify([button_name]);
        var $success = $('.success-message').hide();
        $.ajax({
            url: 'igapp_multiple',
            type: 'POST',
            data: save_data,
            success: function (data) {
                console.log(data);
                var blob=new Blob([data]);
                var link=document.createElement('a');
                link.href=window.URL.createObjectURL(blob);
                link.download="Test_creator_set" + ".pdf";
                link.click();
                $($success).append('<p>Your file is downloaded successfully. Please check your download folder withe filename</p>');
                $($success).toggle('show');
                setTimeout(function(){
                    $($success).fadeOut('slow');
                },2000);
            }
        });
    }


}

function ajax_get_update()
{
    $.get(url, function(results){
        //get the parts of the result you want to update. Just select the needed parts of the response
        var table = $("div#col1", results);
        var span = $("span.step-links", results);

        //update the ajax_table_result with the return value
        $('div#qasection').html(table);
        $('.step-links').html(span);
    }, "html");
}

// $("#ajax_data_loader").bind({
//     ajaxStart: function() { $(this).show(); },
//     ajaxStop: function() { $(this).hide(); }
// });
// $(document).ajaxStop(function() {
//     $('.step-links #prev').click(function(e) {
//         e.preventDefault();
//         url = ($('.step-links #prev')[0].href);
//         ajax_get_update();
//     });
//     $('.step-links #next').click(function(e) {
//         e.preventDefault();
//         url = ($('.step-links #next')[0].href);
//         ajax_get_update();
//     });
// });



// pagination

$(document).ready(function(){
    $('#data').after('<div id="nav1"></div>');
    $('#nav1').after('<div id="nav"></div>');
    $('#nav1').addClass('pagination');
    $('#nav').after('<div id="nav2"></div>');
    $('#nav2').addClass('pagination');

    var rowsShown = 5;
    var rowsTotal = $('#data tbody tr').length;
    var numPages = rowsTotal/rowsShown;
    $('#nav1').append('<a href="#" rel="0">&laquo;</a> ');
    $('#nav2').append('<a href="#" rel="4">&raquo;</a> ');
    for(i = 0;i < numPages;i++) {
        var pageNum = i + 1;
        $('#nav').append('<a href="#" rel="'+i+'">'+pageNum+'</a> ');
    }
    $('#data tbody tr').hide();
    $('#data tbody tr').slice(0, rowsShown).show();

    $('#nav a:first').addClass('active');
    $('#nav').addClass('pagination');
    $('#nav a').bind('click', function(){

        $('#nav a').removeClass('active');
        $(this).addClass('active');

        var currPage = $(this).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#data tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 300);
    });


});