export function ContactList({ contacts }: { contacts: any }) {
  return (
    <>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 my-1">
        {contacts.map((contact: any) => (
          <li className="" key={contact._id}>
            <a href={contact.externalUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100">{contact.label}</a>
          </li>
        ))}
      </ul>
    </>
  )
}