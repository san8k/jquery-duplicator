(function($) {

    $.fn.duplicate = function (settings) {
        const defaultSettings = {
            separator: ` `,
            count: 2
        };

        const options = $.extend(defaultSettings, settings);

        this.each(function() {
            const element = $(this);
            const origin = element.html();
            const result = ``;

            for (let i = 0; i < options.count; i++) {
                result += origin;

                if (i < options.count - 1) {
                    result += options.separator;
                }
            }

            element.html(result);
        });

        return this;
    };

})(jQuery);