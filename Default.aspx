<%@ Page Title="Home Page" Language="VB" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.vb" Inherits="Basketball._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <link type="text/css" href="css/css_Custom.css" rel="stylesheet"/>
    
    <script type="text/javascript" src="Scripts/js_Custom.js"></script>

    <%--<div id="divGame" class="container">
    </div>--%>
    
    <div id="wrapper" class="active">
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul id="sidebar_menu" class="sidebar-nav">
                <li class="sidebar-brand"><a id="menu-toggle" href="#">Menu<span id="main_icon" class="glyphicon glyphicon-align-justify"></span></a></li>
            </ul>
            <ul class="sidebar-nav" id="sidebar">     
                <li><a>Play Game<span class="sub_icon glyphicon glyphicon-link"></span></a></li>
                <li><a>Statistics<span class="sub_icon glyphicon glyphicon-link"></span></a></li>
            </ul>
        </div>
    
        <!-- Page Content -->
        <div class="container page-content-wrapper" id="divGame">
            <!-- Keep all page content within the page-content inset div! -->
            <div class="page-content inset">
	            <div class="row" style="border-bottom-color: currentColor; border-bottom-width: 1px; border-bottom-style: solid;">
	                <div class="col-md-12">
		            <div class="col-md-10">
			            <h2>Game #1</h2>
		            </div>
                    <div class="col-md-1" style="padding-top: 10px;">
                        <button class="btn btn-primary btn3d" type="button">Add Round</button>
		            </div>
                    <div class="col-md-1" style="padding-top: 10px;">
                        <button class="btn btn-danger btn3d" type="button">End Game</button>
		            </div>
	            </div>
        
                <div class="row">
                    <div class="col-md-6" style="height: 150px;">
	                    <div class="row" style="height: 75px; padding-top: 10px;">
		                    <h4 style="float: left; padding-top: 10px; width: 80px;">Justin</h4><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">1</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">2</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">3</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">4</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">5</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">6</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">7</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">8</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">9</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">10</span></button>
	                    </div>

	                    <div class="row" style="height: 75px; padding-top: 10px;">
		                    <h4 style="float: left; padding-top: 10px; width: 80px;">Kevin</h4><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">1</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">2</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">3</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">4</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">5</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">6</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">7</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">8</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">9</span></button><button class="btn btn-default btn-lg btn3d" type="button"><span class="glyphicon">10</span></button>
	                    </div>
                    </div>
        
                    <div class="col-md-3" style="height: 150px;">
                        <div class="alert alert-success" style="width: 100%; height: 100%;" role="alert">
                            <div class="text-center" style="padding-top: 18px;"><span style="font-size: 4em; font-weight: bold;">Justin</span></div>
                        </div>
                    </div>
        
                    <div class="col-md-3" style="height: 150px;">
                        <table class="table">
                            <tr>
                                <td>
                                    <strong>Date & Time</strong>
                                </td>
                                <td>
                                    09/29/2015 5:00 PM
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Location</strong>
                                </td>
                                <td>
                                    Orange
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Round</strong>
                                </td>
                                <td>
                                    1
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>First Shooter</strong>
                                </td>
                                <td>
                                    Justin
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
