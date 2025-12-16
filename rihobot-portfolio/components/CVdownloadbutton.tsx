import { Download } from 'lucide-react'

export default function CvDownloadButton() {
  const cvUrl = 'https://drive.google.com/file/d/1KjIf6ureV-v-aKxlBUfiUVgL7bz96bDY/view?usp=drive_link'
  const cvDirectDownload = 'https://drive.google.com/uc?export=download&id=1KjIf6ureV-v-aKxlBUfiUVgL7bz96bDY'

  return (
    <div className="flex gap-3">
      <a
        href={cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary flex items-center gap-2"
      >
        View CV
      </a>
      <a
        href={cvDirectDownload}
        download="Rihobot_Elias_CV.pdf"
        className="btn-secondary flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        Download CV
      </a>
    </div>
  )
}