/*global $*/

'use strict';

function createAccordion(arr) {
    arr.forEach(element => {
        const $item = $('<div class="accordion-item"></div>');
        $($item)
            .append(`<div class="accordion-title">${element.title}</div>`)
            .append(`<div class="accordion-content">${element.content}</div>`);
        $('.accordion-wrap').append($item);
    });

    $('.accordion-wrap').on('click', '.accordion-item', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').find('.accordion-content').slideUp();
        } else {
            $(this).siblings('.accordion-item').removeClass('active').find('.accordion-content').slideUp();
            $(this).addClass('active').find('.accordion-content').slideDown();
        }
    });
}

const accordionData = [
    {
        title: 'First item title',
        content: 'First item content',
    },
    {
        title: 'Second item title',
        content: 'Second item content',
    },
    {
        title: 'Third item title',
        content: 'Third item content',
    }
];

createAccordion(accordionData);