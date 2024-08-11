import React from 'react'
import './_headerLanguageContent.scss'

const languages: Record<string, string>[] = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'zh',
    label: 'Chinese',
  },
  {
    value: 'es',
    label: 'Spanish',
  },
  {
    value: 'fr',
    label: 'French',
  },
  {
    value: 'vi',
    label: 'Vietnamese',
  },
]

type HeaderLanguageContentProps = {
  onClose: () => void
}

const HeaderLanguageContent = ({ onClose }: HeaderLanguageContentProps) => {
  return (
    <div className="header-language-content">
      <ul>
        {languages.map((language) => (
          <li key={language.value}>
            <span className="header-language-content__item" onClick={onClose}>
              {language.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeaderLanguageContent
