import IconLocation from "@/components/icons/IconLocation";
import IconMail from "@/components/icons/IconMail";
import IconTelegram from "@/components/icons/IconTelegram";

export default function Contacts() {
  return (
    <main className="section ">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p style={{ display: 'inline-flex', alignItems: 'center' }}>
              <IconLocation width={20} height={20}/>
              Saint Petersburg, Russia
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a
                href="https://t.me/makarchuk_bogdan"
                target="blank"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <IconTelegram width={22} height={22}/>
                makarchuk_bogdan
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a
                href="mailto:makarchuk-bogdan@yandex.ru"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <IconMail width={16} height={16}/>
                makarchuk-bogdan@yandex.ru
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}
