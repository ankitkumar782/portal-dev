import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../Services/Crud_Services/post.service';
import * as XLSX from 'xlsx';
import { Subject } from 'rxjs';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-flight-sale-report',
  templateUrl: './flight-sale-report.page.html',
  styleUrls: ['./flight-sale-report.page.scss'],
})
export class FlightSaleReportPage implements OnInit {


  resultArr: any
  wait = true
  maxDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  amt: number = 0;
  pdfData: any;
  from = this.maxDate
  to = this.maxDate
  Token: any;
  Agentid: any;
  ShowCancelModel = false;
  ShowModelDATA = true;
  cancelBookingId: any;
  isModalOpen = false;
  ticket = false
  ticketConfirmation: boolean = false;
  Airlinecharge: any;
  KafilaCharge: any;
  CustomerAmount: any;
  airlinerefund: any;
  airlineToken: any;
  totalFare: any;
  flightcode: any;
  ICanceled: any;
  serviceCharge: any;
  refundableammo: any;
  pnrOf: any;
  charge: any;
  tax: any
  spinner = false;
  env: string;
  constructor(private pstService: PostService) { }

  ngOnInit() {
    this.env=sessionStorage.getItem("ENV")

    this.Token = sessionStorage.getItem("Token")
    this.Agentid = sessionStorage.getItem("Agentid")
    this.apiHit()
    // this.Token = sessionStorage.getItem("Token")
  }

  apiHit() {

    let obj = {
      "P_TYPE": "API",
      "R_TYPE": "FLIGHT",
      "R_NAME": "FlightSaleReport",
      "R_DATA": {
        "FROM_DATE": this.from + "T00:00:00.001Z",
        "TO_DATE": this.to + "T23:59:59.999Z"
      },
      "AID": this.Agentid,
      "MODULE": "B2B",
      "IP": "182.73.146.154",
      "TOKEN": this.Token,
      "ENV": this.env,
      "Version": "1.0.0.0.0.0"
    }
    console.log(obj)
    this.spinner = true;

    this.pstService.POST('/FReport', obj).subscribe((res) => {
      console.log(res)

      if (res) {
        this.spinner = false;
      }
      this.resultArr = res
      this.wait = false
    },
      (err) => {
        console.log(err)
        this.wait = true
      })
  }

  fileName = 'SaleReport.xlsx';
  exportexcel(): void {
    let element = document.getElementById('tab3');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }

  openPDF(): void {
    var doc = new jsPDF('l', 'mm', [512, 392]);
    doc.setFontSize(5);
    doc.setTextColor(100);
    (doc as any).autoTable({
      head: [['FID', 'RID', 'Email Id', 'Booking Id', 'Amount', 'PNR', 'DEP Date', 'ETIME', 'Status', 'OI', 'IP']],
      body: this.pdfData,
    })
    doc.output('dataurlnewwindow')
    doc.save('BookingReport' + this.maxDate + '.pdf');
  }

  showticket = false
  showbooking = true
  test: any
  hide() {
    this.showticket = false
  }

  search = []
  addbutton = true
  formsearcg = false
  addvalue() {
    this.addbutton = false
    this.formsearcg = true
  }


  removevalue(i) {
    this.search.splice(i, 1);
  }

  FromData = ""
  data = ""
  bookinid
  pnr
  fname
  lname
  toDate
  fromDate
  StatusKey

  condition() {
  }
  searchBy() {
    if (this.FromData == "BookingId") {
      this.bookinid = this.data
    }
    else {
      this.bookinid = ''
    }
    if (this.FromData == "Pnr") {
      this.pnr = this.data
    }
    else {
      this.pnr = ''
    }
    if (this.FromData == "FName") {
      this.fname = this.data
    }
    else {
      this.fname = ''
    }
    if (this.FromData == "LName") {
      this.lname = this.data
    }
    else {
      this.lname = ''
    }
    console.log(this.FromData, this.data)

    let obj = {
      "P_TYPE": "API",
      "R_TYPE": "FLIGHT",
      "R_NAME": "USearch",
      "R_DATA": {
        "FromDate": this.fromDate + "T00:00:00.001Z",
        "ToDate": this.toDate + "T23:59:59.999Z",
        "Env": 'P',
        "Pnr": this.pnr,
        "FName": this.fname,
        "LName": this.lname,
        "BookingId": this.bookinid
      },
      "AID": this.Agentid,
      "MODULE": "B2B",
      "IP": "182.73.146.154",
      "TOKEN": this.Token,
      "ENV": this.env,
      "Version": "1.0.0.0.0.0"
    }
    console.log(obj)
    this.pstService.POST('/FReport', obj).subscribe((res) => {
      console.log(res)
      this.resultArr = res
      this.resultArr.forEach(ele => {
      });

    },
      (err) => {
        console.log(err)
      })
  }




}
