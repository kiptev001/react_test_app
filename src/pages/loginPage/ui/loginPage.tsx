import React from 'react'
import { useTranslation } from 'react-i18next'

const loginPage = () => {
  const { t } = useTranslation('login')
  return (
    <div>
      {t('Страница входа')}
    </div>
  )
}

export default loginPage
