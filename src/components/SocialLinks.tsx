import { Github, Linkedin, Facebook, Youtube } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/AhmedShidanie',
    color: 'hover:text-gray-900'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/ahmed-hassan-06a221335/',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/AHMEDOMAR.SHINE/',
    color: 'hover:text-blue-400'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://www.youtube.com/@AHMEDOMAR.SHIINE',
    color: 'hover:text-pink-600'
  }
];

export function SocialLinks() {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl">
      <h3 className="text-xl font-semibold mb-4">Follow me on social media</h3>
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className={`p-3 bg-white rounded-lg shadow-sm ${link.color} transition-colors`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
}