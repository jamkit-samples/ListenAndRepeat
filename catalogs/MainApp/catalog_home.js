function listen_and_repeat() {
    listen("en", function(words) {
        if (words && words.length > 0) {
            speak(words[0], "en");

            view.object("label.words").property({
                "text": words[0]
            });
        } else {
            controller.action("toast", {
                "message": "Please try again."
            });
        }
    });

    view.object("label.words").property({
        "text": ""
    });
}
