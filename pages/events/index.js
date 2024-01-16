import { Fragment } from 'react'
import { getAllEvents } from "../../dummy-data"
import { useRouter } from 'next/router'

import EventList from '../../components/events/event-list'
import EventsSearch from "../../components/events/events-search"

export default function EventsPage() {
  const events = getAllEvents()
  const router = useRouter()

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}
