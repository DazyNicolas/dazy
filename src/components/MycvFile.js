import React, { Component } from 'react'
import jsPDF from 'jspdf'
import monCv from '../assets/img/Dazy_CV_Dev-web.pdf'

export default class MycvFile extends Component {
    pdfCv = () =>{
        const doc = new jsPDF ('landscape','px', 'a4', 'false');
        doc.addImage(monCv, 'PNG', 65, 20,400, 400)
        doc.text(120, 410, 'Dazy')
        doc.save('Dazy_CV_Dev-web.pdf')
    }
  render() {
    return (
      <div className="btn-cv">
        <button onClick={this.pdfCv}>Cliquez ici pour tèlecharger mon cv en pdf</button>
      </div>
    )
  }
}
