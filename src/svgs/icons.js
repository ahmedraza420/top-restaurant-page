import github from "./raw/github";
import toggle from "./raw/toggle";
import instagram from "./raw/instagram";
import twitter from "./raw/twitter";
import facebook from "./raw/facebook";
import youtube from "./raw/youtube";
import email from "./raw/email";
import call2 from "./raw/call2";
import previous from "./raw/previous";
import next from "./raw/next";
import call from "./raw/call"
// importing modules should be refactored to return a funtion, so the calls would be
// icons.toggle()
// otherwise to use same icon twice you would need to use .cloneNode(true);
export default {
    toggle,
    github,
    instagram,
    twitter,
    facebook,
    youtube,
    email,
    call,
    call2,
    previous,
    next,
}