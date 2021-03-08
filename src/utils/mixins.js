import { formatDistanceToNow, parseISO } from 'date-fns'

export const fromNowFilter = {
  filters: {
    fromNow (datetime) {
      return datetime ? formatDistanceToNow(parseISO(datetime)) : '-'
    }
  }
}

export const emptyImageFilter = {
  filters: {
    emptyImage (src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}
