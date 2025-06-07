import IconGitHubBlack from '@/components/icons/IconGitHubBlack'

interface BtnGitHubProps {
  link: string
  text?: string
}

const BtnGitHub: React.FC<BtnGitHubProps> = ({ link, text }) => {
  const isGitHubLink = link.includes('github')
  const buttonText = text || (isGitHubLink ? 'GitHub repo' : 'Visit site')

  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      {isGitHubLink && <IconGitHubBlack width={24} height={24}/>}
      {buttonText}
    </a>
  )
}

export default BtnGitHub
