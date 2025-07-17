import { addCopyRight, generateID, getRandomColor } from '@sarawebs/sb-utils';

export default function Footer() {
  return (
    <footer>
      <div>
        <p style={{textAlign: 'center'}}>
          SaraCV © 2025
          <br />
          Built with ❤️ by {' '}
          <a
            href="https://sarawebs.com"
            target="_blank"
            rel="noopener"
            style={{color:'#207de9', textDecoration:'none'}}
          >
            SaraWebs
          </a>
        </p>
      </div>
    </footer>
  );
}
