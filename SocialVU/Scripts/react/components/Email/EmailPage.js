var React = require('react');
var $ = require('jQuery');
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Particles from 'react-particles-js';

export default class EmailPage extends React.Component {
    render() {
        return (

            <div>
                {/* <!-- ------ -->< !-- ------ -->< !-- ------ -->
            <!-- ------ -->< !--nav  -->< !-- ------ -->
            <!-- ------ -->< !-- ------ -->< !-- ------ -->*/}
                <div class="navbar-fixed">
                    <nav>
                        {/*<!-- nav wrapper - start -->*/}
                        <div class="nav-wrapper z-depth-2 teal darken-2">
                            {/*// search-field - start */}
                            <ul id="nav-mobile" class="right">
                                <li>
                                    <form class="teal search">
                                        <div class="input-field search-field">
                                            <input id="search" type="search" class="search-field-input" required />
                                            <label for="search"><i class="material-icons white-text">search</i></label>
                                            <i class="material-icons">close</i>

                                        </div>
                                    </form>
                                </li>
                            </ul>
                            {/*<!-- search-field - end -->
                             * <!-- side-nav - start -->*/}
                            <ul id="slide-out" class="side-nav fixed teal lighten-5">
                                {/* <!-- menu-avatar - start -->*/}
                                <div class="center-align teal darken-2 no-padding side-nav-user">
                                    <a href="#" class="white-text side-nav-user-link">
                                        <img src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png" class="circle left side-nav-user-avatar" alt="avatar" />
                                        {/*  <!-- username -->*/}
                                        <p class="side-nav-user-name">burnaDLX</p>
                                        {/* <!-- usermail - start -->*/}
                                        <span class="side-nav-user-mail teal-text text-lighten-3">
                                            <div class="side-nav-account input-field col s12 teal-text text-lighten-3">
                                                <select>
                                                    <option value="1">user@gmail.com</option>
                                                    <option value="2">uxerXY@web.de</option>
                                                </select>
                                            </div>
                                        </span>
                                        {/*<!-- usermail - end -->*/}
                                    </a>
                                </div>
                                {/* <!-- menu-avatar - end -->*/}
                                {/*<!-- menu-item - start -->*/}
                                <li class="no-padding">
                                    <ul class="collapsible collapsible-accordion">
                                        {/* <!-- write - start -->*/}
                                        <li>
                                            <a href="https://codepen.io/burnaDLX/debug/PNNeaY">
                                                <i class="material-icons grey-text text-darken-3 left">create</i>
                                                Write</a>
                                        </li>
                                        {/*<!-- write - end -->
                                         * <!-- inbox - start -->*/}
                                        <li class="active">
                                            <a href="#">
                                                <i class="material-icons grey-text text-darken-3 left">move_to_inbox</i>
                                                Inbox &nbsp;
								<span class="new badge">2</span>
                                            </a>
                                        </li>
                                        {/*<!-- inbox - end -->*/}
                                        <li><div class="divider grey"></div></li>
                                        {/*<!-- outbox - start -->*/}
                                        <li>
                                            <a href="https://codepen.io/burnaDLX/debug/KzzGre">
                                                <i class="material-icons grey-text text-darken-3 left">inbox</i>
                                                Outbox
                                                </a>
                                        </li>
                                        {/*<!-- outbox - end -->*/}
                                        {/*<!-- drafts - start -->*/}
                                        <li>
                                            <a href="#">
                                                <i class="material-icons grey-text text-darken-3 left">drafts</i>
                                                Drafts
                                                </a>
                                        </li>
                                        {/*<!-- drafts - end -->*/}
                                        {/*<!-- archive - start -->*/}
                                        <li>
                                            <ul class="collapsible collapsible-accordion">
                                                <li>
                                                    <a class="collapsible-header side-nav-dropdown">
                                                        <i class="material-icons left">archive</i>
                                                        Archive
										<i class="material-icons right">keyboard_arrow_down</i></a>
                                                    <div class="collapsible-body">
                                                        <ul>
                                                            <li><a href="#!"><i class="material-icons left">folder</i>2016</a></li>
                                                            <li><a href="#!"><i class="material-icons left">folder</i>2015</a></li>
                                                            <li><a href="#!"><i class="material-icons left">folder</i>2014</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        {/*<!-- archive - end -->*/}
                                        {/*<!-- contacts - end -->*/}
                                        <li>
                                            <a href="https://codepen.io/burnaDLX/debug/reePpq">
                                                <i class="material-icons grey-text text-darken-3 left">face</i>
                                                Contacts
                                                </a>
                                        </li>
                                        { /*<!-- contacts - end -->*/}
                                        <li><div class="divider grey"></div></li>
                                        {/* <!-- trash can - start -->*/}
                                        <li>
                                            <a href="#">
                                                <i class="material-icons grey-text text-darken-3 left">delete</i>
                                                Trash can
                                                </a>
                                        </li>
                                        {/*<!-- trash can - end -->*/}
                                        {/*<!-- settings - start -->*/}
                                        <li>
                                            <a href="https://codepen.io/burnaDLX/debug/RaRwrp">
                                                <i class="material-icons grey-text text-darken-3 left">settings</i>
                                                Settings
                                                </a>
                                        </li>
                                        {/*<!-- settings - end -->*/}
                                        <li><div class="divider grey"></div></li>
                                        {/*<!-- Logout - start -->*/}
                                        <li>
                                            <a href="#">
                                                <i class="material-icons grey-text text-darken-3 left">power_settings_new</i>
                                                Logout
                                                </a>
                                        </li>
                                        {/*<!-- Logout - end -->*/}
                                    </ul>
                                </li>
                                {/*<!-- menu-item - end -->*/}
                            </ul>
                            {/*<!-- side-nav - end -->*/}
                            {/*<!-- side-nav-icon - start -->*/}
                            <a href="#" data-activates="slide-out" class="button-collapse white-text"><i class="material-icons">menu</i></a>
                            {/*<!-- side-nav-icon - end -->*/}
                        </div>
                        {/*<!-- nav wrapper - end -->*/}
                    </nav>
                </div>
                {/*<!-- ------ --><!-- ------ --><!-- ------ -->
                 * <!-- ------ --><!-- corpus --><!-- ------ -->
                 * <!-- ------ --><!-- ------ --><!-- ------ -->*/}

                <main>

                    <div class="row stage">

                        {/*<!-- mail overview -start -->*/}
                        <div class="col s12 m4 l4 padding-l">
                            <div class="collapsible-header cyan darken-3 white-text">
                                <i class="material-icons">move_to_inbox</i>Inbox
                                </div>
                            {/*<!-- mail-list - start -->*/}
                            <ul id="content-l" class="scrollbar-content collection z-depth-1">

                                {/*<!-- preview list item - start -->*/}
                                <li class="income-box-mail collection-item avatar new-mail bold" data-mail-id={1} >
                                    <a href="#!">
                                        <i class="material-icons circle green">face</i>
                                        <span class="income-box-sender title">UserXYZ</span>
                                        <p class=" income-box-subject grey-text">FW: Subject <br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">This is a text long text preview to see the 'truncate' class working</span>
                                        </p>

                                    </a>
                                </li>
                                {/*<!-- preview list item - start -->*/}
                                <li class="income-box-mail collection-item avatar new-mail bold" data-mail-id={2}>
                                    <a href="#!">
                                        <i class="material-icons circle red">face</i>
                                        <span class="income-box-sender title">UserXYZ</span>
                                        <p class=" income-box-subject grey-text">FW: Subject <br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">This is a text long text preview to see the 'truncate' class working</span>
                                        </p>
                                    </a>
                                </li>
                                {/*<!-- preview list item - start -->*/}
                                <li class="income-box-mail collection-item avatar" data-mail-id={3}>
                                    <a href="#!">
                                        <i class="material-icons circle blue lighten-2">face</i>
                                        <span class="income-box-sender title">Simon G.</span>
                                        <p class="income-box-subject grey-text">Just to say hello<br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">Dear Lorem ipsum, dolor sit amet, consetetur sadipscing</span>
                                        </p>

                                    </a>
                                </li>
                                {/*<!-- preview list item - start -->*/}
                                <li class="income-box-mail collection-item avatar" data-mail-id={4}>
                                    <a href="#!">
                                        <i class="material-icons circle yellow darken-2">face</i>
                                        <span class="income-box-sender title">UserXYZ</span>
                                        <p class=" income-box-subject grey-text">FW: Subject <br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">This is a text long text preview to see the 'truncate' class working</span>
                                        </p>

                                    </a>
                                </li>
                                {/*<!-- preview list item - start -->*/}
                                <li class="income-box-mail collection-item avatar" data-mail-id={5}>
                                    <a href="#!">
                                        <i class="material-icons circle teal">face</i>
                                        <span class="income-box-sender title">UserXYZ</span>
                                        <p class=" income-box-subject grey-text">FW: Subject <br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">This is a text long text preview to see the 'truncate' class working</span>
                                        </p>

                                    </a>
                                </li>
                                {/*<!-- preview list item - start -->*/}
                                <li class="income-box-mail collection-item avatar" data-mail-id={6}>
                                    <a href="#!">
                                        <i class="material-icons circle pink">face</i>
                                        <span class="income-box-sender title">UserXYZ</span>
                                        <p class=" income-box-subject grey-text">FW: Subject <br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">This is a text long text preview to see the 'truncate' class working</span>
                                        </p>

                                    </a>
                                </li>
                                {/*<!-- preview list item - start -->*/}
                                <li class="income-box-mail collection-item avatar" data-mail-id={7}>
                                    <a href="#!">
                                        <i class="material-icons circle orange">face</i>
                                        <span class="income-box-sender title">UserXYZ</span>
                                        <p class=" income-box-subject grey-text">FW: Subject <br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">This is a text long text preview to see the 'truncate' class working</span>
                                        </p>

                                    </a>
                                </li>
                                {/*<!-- preview list item - start -->*/}
                                <li class="income-box-mail collection-item avatar" data-mail-id={8}>
                                    <a href="#!" href="">
                                        <img src="https://bit.ly/1Xsfj0K" alt="" class="circle"></img>
                                        <span class="income-box-sender title">UserXYZ</span>
                                        <p class=" income-box-subject grey-text">FW: Subject <br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">This is a text long text preview to see the 'truncate' class working</span>
                                        </p>

                                    </a>
                                </li>
                                {/*  <!-- preview list item - start -->*/}
                                <li class="income-box-mail collection-item avatar" data-mail-id={9}>
                                    <a href="#!">
                                        <i class="material-icons circle green">face</i>
                                        <span class="income-box-sender title">UserXYZ</span>
                                        <p class=" income-box-subject grey-text">FW: Subject <br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">This is a text long text preview to see the 'truncate' class working</span>
                                        </p>

                                    </a>
                                </li>
                                {/*  <!-- preview list item - start -->*/}
                                <li class="income-box-mail collection-item avatar" data-mail-id={10}>
                                    <a href="#!">
                                        <i class="material-icons circle red">face</i>
                                        <span class="income-box-sender title">UserXYZ</span>
                                        <p class=" income-box-subject grey-text">FW: Subject <br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">This is a text long text preview to see the 'truncate' class working</span>
                                        </p>

                                    </a>
                                </li>
                                {/*  <!-- preview list item - start -->*/}
                                <li class="income-box-mail collection-item avatar" data-mail-id={11}>
                                    <a href="#!">
                                        <i class="material-icons circle yellow darken-2">face</i>
                                        <span class="income-box-sender title">UserXYZ</span>
                                        <p class=" income-box-subject grey-text">FW: Subject <br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">This is a text long text preview to see the 'truncate' class working</span>
                                        </p>
                                    </a>
                                </li>
                                {/* <!-- preview list item - start -->*/}
                                <li class="income-box-mail collection-item avatar" data-mail-id={12}>
                                    <a href="#!">
                                        <i class="material-icons circle teal">face</i>
                                        <span class="income-box-sender title">UserXYZ</span>
                                        <p class=" income-box-subject grey-text">FW: Subject <br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">This is a text long text preview to see the 'truncate' class working</span>
                                        </p>

                                    </a>
                                </li>
                                {/*  <!-- preview list item - start -->*/}
                                < li class="income-box-mail collection-item avatar" data-mail-id={13}>
                                    <a href="#!">
                                        <i class="material-icons circle pink">face</i>
                                        <span class="income-box-sender title">UserXYZ</span>
                                        <p class=" income-box-subject grey-text">FW: Subject <br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">This is a text long text preview to see the 'truncate' class working</span>
                                        </p>

                                    </a>
                                </li>
                                {/* <!-- preview list item - start -->*/}
                                <li class="income-box-mail collection-item avatar" data-mail-id={14}>
                                    <a href="#!">
                                        <i class="material-icons circle orange">face</i>
                                        <span class="income-box-sender title">UserXYZ</span>
                                        <p class=" income-box-subject grey-text">FW: Subject
                                            <br></br>
                                            <span class="income-box-text grey-text text-lighten-1 truncate">This is a text long text preview to see the 'truncate' class working</span>
                                        </p>

                                    </a>
                                </li>
                            </ul>
                            {/* <!-- mail-list - end -->*/}


                        </div>
                        {/*   <!-- mail overview - end -->*/}

                        {/*<!-- detail view - start -->*/}
                        <div class="col s12 m8 l8 padding-r">
                            <ul class="white collapsible mail-top" data-collapsible="accordion">
                                <li>
                                    <div class="collapsible-header teal white-text">
                                        <i class="material-icons">face</i>
                                        Sender
						<i class="material-icons right">keyboard_arrow_down</i>
                                    </div>
                                    <ul class="collapsible-body collection with-header">

                                        {/*<!-- receiver - start -->*/}
                                        <li class="collection-item row">
                                            <div class="receiver input-field col s10">
                                                <p class="prefix">To:</p>
                                                <span class="grey-text">Simon G.&nbsp;(simon-gfunk@derp.com)</span>
                                            </div>
                                        </li>
                                        {/*<!-- receiver - end -->*/}

                                        {/*<!-- subject - start -->*/}
                                        <li class="collection-item row">
                                            <div class="subject input-field col s10">
                                                <p class="left prefix">Subject:</p>
                                                <span class="grey-text">Just to say hello</span>
                                            </div>
                                        </li>
                                        {/*<!-- subject - end -->*/}

                                        {/*<!-- cc - start -->*/}
                                        <li class="collection-item row">
                                            <div class="subject input-field col s10">
                                                <p class="left prefix">CC:</p>
                                                <span class="grey-text">UserABC@abc.de, UserXYZ@abc.de</span>
                                            </div>
                                        </li>
                                        {/*  <!-- cc - end -->
                    
						<!-- bcc - start -->*/}
                                        <li class="collection-item row">
                                            <div class="subject input-field col s10">
                                                <p class="left prefix">BCC:</p>
                                                <span class="grey-text">UserABC@abc.de, UserXYZ@abc.de</span>
                                            </div>
                                        </li>
                                        {/* <!-- bcc - end -->*/}
                                    </ul>
                                </li>

                                <li>
                                    {/* <!-- toolbar - start -->*/}
                                    <div class="collapsible-header teal lighten-2 white-text">
                                        <div class="nav-wrapper">
                                            <ul>
                                                {/* <!-- date -->*/}
                                                <li>
                                                    <a href="#" class="left grey-text text-lighten-3">
                                                        <i class="material-icons ">watch_later</i>18.01.2016 22:36</a>
                                                </li>

                                                {/*<!-- icons - start -->*/}

                                                {/*<!-- delete icon -->*/}
                                                <li>
                                                    <a href="#" class="right waves-effect waves-teal tooltipped" data-position="bottom" data-delay="50" data-tooltip="Delete mail">
                                                        <i class="material-icons white-text waves-effect waves-teal">delete</i>
                                                    </a>
                                                </li>
                                                {/*<!-- archive icon -->*/}
                                                <li>
                                                    <a href="#" class="right waves-effect waves-teal tooltipped" data-position="bottom" data-delay="50" data-tooltip="Archive mail">
                                                        <i class="material-icons white-text waves-effect waves-teal">archive</i>
                                                    </a>
                                                </li>
                                                {/* <!-- markunread icon -->*/}
                                                <li>
                                                    <a href="#" class="right waves-effect waves-teal tooltipped" data-position="bottom" data-delay="50" data-tooltip="Mark as unread">
                                                        <i class="material-icons white-text waves-effect waves-teal">markunread</i>
                                                    </a>
                                                </li>
                                                {/* <!-- print icon -->*/}
                                                <li>
                                                    <a href="#" class="right waves-effect waves-teal tooltipped" data-position="bottom" data-delay="50" data-tooltip="Print mail">
                                                        <i class="material-icons white-text waves-effect waves-teal">print</i>
                                                    </a>
                                                </li>
                                                {/*  <!-- forward icon -->*/}
                                                <li>
                                                    <a href="#" class="right waves-effect waves-teal tooltipped" data-position="bottom" data-delay="50" data-tooltip="Forward mail">
                                                        <i class="material-icons white-text waves-effect waves-teal">forward_mail</i>
                                                    </a>
                                                </li>
                                                {/*<!-- reply all icon -->*/}
                                                <li>
                                                    <a href="#" class="right waves-effect waves-teal tooltipped" data-position="bottom" data-delay="50" data-tooltip="Reply all">
                                                        <i class="material-icons white-text waves-effect waves-teal">reply_all</i>
                                                    </a>
                                                </li>
                                                {/* <!-- reply icon --> */}
                                                <li>
                                                    <a href="#" class="right waves-effect waves-teal tooltipped" data-position="bottom" data-delay="50" data-tooltip="Reply to mail">
                                                        <i class="material-icons white-text waves-effect waves-teal">reply</i>
                                                    </a>
                                                </li>
                                                {/*<!-- icons - end -->*/}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- toolbar - end -->
					<!-- mail content - start -->*/}
                                    <div class="mail-text">
                                        <p>
                                            Dear Lorem ipsum,<br /><br /> dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
							gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <a href="">This is a hyperlink</a>. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
							diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><br />Sincerly yours, Sit Amet
						</p>


                                        <div class="mail-attach">
                                            <div class="divider"></div>
                                            <div class="chip">
                                                <a href="#">DMC_28383.jpg</a>
                                            </div>
                                            <div class="chip">
                                                <a href="#">DMC_28384.jpg</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<  <!-- mail content - end -->*/}
                                </li>
                            </ul>
                        </div>
                        {/*<!-- detail view - end -->*/}
                    </div>

                </main>
            </div>
        );
    }

}
//active class - end
// ---------------------
$(document).ready(function () {

    // ---------------------
    // nav-bar - start
    $(".button-collapse").sideNav({
        menuWidth: 220
    });
    // nav-bar - end
    // ---------------------

    // ---------------------
    // scrollbar - end
    $(window).load(function () {
        //choose theme
        $("#content-l").mCustomScrollbar({
            theme: "rounded-dots-dark"
        });
    });
    // scrollbar - end
    // ---------------------

    // ---------------------
    // side-nav account select - start
    $('select').material_select();
    // side-nav account select - end
    // ---------------------
});


// ---------------------
// clear search - start
$('.search-field i').click(function () {
    $('.search-field-input').val('');
});
// clear search - end
// ---------------------



// ---------------------
//active class - start
$('.income-box-mail').click(function () {
    // set all mails to non-active and removes (lighten) grey from title, subject and subject span
    // title
    var resetActiveAr = [
        { "target": ".income-box-mail", "class": "active", "action": "remove" },
        { "target": ".income-box-sender", "class": "grey-text", "action": "remove" },
        { "target": ".income-box-sender", "class": "text-lighten-3", "action": "remove" },
        { "target": ".income-box-subject", "class": "text-lighten-3", "action": "remove" },
        { "target": ".income-box-text", "class": "text-lighten-3", "action": "remove" },
        { "target": ".income-box-text", "class": "text-lighten-1", "action": "add" }
    ];
    editClasses(resetActiveAr);


    // set active state
    var setActiveAr = [
        { "target": this, "class": "active", "action": "add" }
    ];
    editClasses(setActiveAr);
    // sender grey
    $(this).find('.income-box-sender').addClass('grey-text');
    $(this).find('.income-box-sender').addClass('text-lighten-3');
    // subject grey
    $(this).find('.income-box-subject').addClass('text-lighten-3');
    // subject span grey
    $(this).find('.income-box-text').removeClass('text-lighten-1');
    $(this).find('.income-box-text').addClass('text-lighten-3');


    // if picked mail was new, remove new related classes
    if ($(this).hasClass('new-mail')) {
        var newMailAr = [
            { "target": this, "class": "new-mail", "action": "remove" },
            { "target": this, "class": "bold", "action": "remove" }
        ];
        editClasses(newMailAr);
    }
});

// adds and removes classes
function editClasses(classes) {
    console.log($(classes[0]))

    for (var i = 0; i < classes.length; i++) {
        if (classes[i].action == "remove") {
            $(classes[i].target).removeClass(classes[i].class);
        }
        if (classes[i].action == "add") {
            $(classes[i].target).addClass(classes[i].class);
        }
    }
}
