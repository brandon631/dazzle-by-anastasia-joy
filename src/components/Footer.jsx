import siteSettings from '../content/site/settings.json'

export default function Footer() {
  return (
    <footer className="bg-luxury-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-white/50 text-sm">
            {siteSettings.footerNote}
          </p>
        </div>
      </div>
    </footer>
  )
}
