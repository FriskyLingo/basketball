'------------------------------------------------------------------------------
' <auto-generated>
'     This code was generated from a template.
'
'     Manual changes to this file may cause unexpected behavior in your application.
'     Manual changes to this file will be overwritten if the code is regenerated.
' </auto-generated>
'------------------------------------------------------------------------------

Imports System
Imports System.Collections.Generic

Partial Public Class Game
    Public Property id As Integer
    Public Property locationId As Integer
    Public Property dateAndTime As Date
    Public Property winner As Integer

    Public Overridable Property Game_Players As ICollection(Of Game_Players) = New HashSet(Of Game_Players)
    Public Overridable Property Game_Round_PlayerShots As ICollection(Of Game_Round_PlayerShots) = New HashSet(Of Game_Round_PlayerShots)
    Public Overridable Property Game_Rounds As ICollection(Of Game_Rounds) = New HashSet(Of Game_Rounds)
    Public Overridable Property lu_Location As lu_Location
    Public Overridable Property lu_Player As lu_Player

End Class