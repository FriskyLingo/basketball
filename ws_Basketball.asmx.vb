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

End Class