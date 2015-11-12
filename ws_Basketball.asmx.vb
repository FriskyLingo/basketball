Imports System.Web.Services
Imports System.Web.Services.Protocols
Imports System.ComponentModel
Imports System.Data.Entity.Core.Objects

' To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line.
<System.Web.Script.Services.ScriptService()> _
<System.Web.Services.WebService(Namespace:="http://tempuri.org/")> _
<System.Web.Services.WebServiceBinding(ConformsTo:=WsiProfiles.BasicProfile1_1)> _
<ToolboxItem(False)> _
Public Class ws_Basketball
    Inherits System.Web.Services.WebService

    <WebMethod()> _
    Public Function HelloWorld(testParam As String) As String
        Return "Hello World"
    End Function

    <WebMethod(EnableSession:=True)> _
    Public Function GetGames(gameId As String) As List(Of sec_Select_Game_Result)
        Dim theGames As New List(Of sec_Select_Game_Result)

        Try
            Using db As New BasketballContext()
                theGames = db.sec_Select_Game(Nothing).ToList()
            End Using
        Catch ex As Exception
            Throw New Exception(ex.Message, ex)
        End Try

        Return theGames
    End Function

    <WebMethod(EnableSession:=True)> _
    Public Function GetRounds(roundId As String) As List(Of sec_Select_lu_Round_Result)
        Dim theRounds As New List(Of sec_Select_lu_Round_Result)

        Try
            Using db As New BasketballContext()
                theRounds = db.sec_Select_lu_Round(Nothing).ToList()
            End Using
        Catch ex As Exception
            Throw New Exception(ex.Message, ex)
        End Try

        Return theRounds
    End Function

    <WebMethod(EnableSession:=True)> _
    Public Function GetPlayers(playerId As String) As List(Of sec_Select_lu_Player_Result)
        Dim thePlayers As New List(Of sec_Select_lu_Player_Result)

        Try
            Using db As New BasketballContext()
                thePlayers = db.sec_Select_lu_Player(Nothing).ToList()
            End Using
        Catch ex As Exception
            Throw New Exception(ex.Message, ex)
        End Try

        Return thePlayers
    End Function

    <WebMethod(EnableSession:=True)> _
    Public Function GetLocations(locationId As String) As List(Of sec_Select_lu_Location_Result)
        Dim theLocations As New List(Of sec_Select_lu_Location_Result)

        Try
            Using db As New BasketballContext()
                theLocations = db.sec_Select_lu_Location(Nothing).ToList()
            End Using
        Catch ex As Exception
            Throw New Exception(ex.Message, ex)
        End Try

        Return theLocations
    End Function

    <WebMethod(EnableSession:=True)> _
    Public Function GetGameRounds(gameRoundId As String) As List(Of sec_Select_Game_Rounds_Result)
        Dim theGameRounds As New List(Of sec_Select_Game_Rounds_Result)

        Try
            Using db As New BasketballContext()
                theGameRounds = db.sec_Select_Game_Rounds(Nothing).ToList()
            End Using
        Catch ex As Exception
            Throw New Exception(ex.Message, ex)
        End Try

        Return theGameRounds
    End Function

    <WebMethod(EnableSession:=True)> _
    Public Function GetGameRoundPlayerShots(gameRoundPlayerShotsId As String) As List(Of sec_Select_Game_Round_PlayerShots_Result)
        Dim theGameRoundPlayerShots As New List(Of sec_Select_Game_Round_PlayerShots_Result)

        Try
            Using db As New BasketballContext()
                theGameRoundPlayerShots = db.sec_Select_Game_Round_PlayerShots(Nothing).ToList()
            End Using
        Catch ex As Exception
            Throw New Exception(ex.Message, ex)
        End Try

        Return theGameRoundPlayerShots
    End Function

    <WebMethod(EnableSession:=True)> _
    Public Function getGamePlayers(gamePlayersId As String) As List(Of sec_Select_Game_Players_Result)
        Dim theGamePlayers As New List(Of sec_Select_Game_Players_Result)

        Try
            Using db As New BasketballContext()
                theGamePlayers = db.sec_Select_Game_Players(Nothing).ToList()
            End Using
        Catch ex As Exception
            Throw New Exception(ex.Message, ex)
        End Try

        Return theGamePlayers
    End Function


End Class