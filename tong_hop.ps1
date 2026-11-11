>># Script : tong_hop.ps1
>># Tac gia : Bui Minh Hoang
>># Ngay tao : 11/11/2026
>>Write-Host "Dang tao bao cao..."
>>" === Bao Cao Su Co WEBSITE ===" > .\logs\tong_hop.txt
>>Get-Content .\logs\Booking.log | select-string "status=404" >> .\logs\tong_hop.txt
>>Get-Content .\logs\Booking.log | select-string "status=500" | Measure-Object >> .\logs\tong_hop.txt
>>Write-Host "HOAN THANH!"
