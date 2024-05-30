import { defineStore } from 'pinia'

export type ToastStatus = 'success' | 'warning' | 'error'

interface Toast {
  message: string
  status: ToastStatus
  id: number
}

type ToastPayload = {
  message: string
  status: ToastStatus
}

const createToast = (toast: ToastPayload): Toast => ({
  message: toast.message,
  status: toast.status,
  id: Math.random() * 1000
})

export const useToastStore = defineStore('toast', {
  state: (): { toasts: Toast[] } => ({
    toasts: []
  }),
  actions: {
    add(toast: ToastPayload) {
      const newToast = createToast(toast)

      this.toasts.push(newToast)
    },
    remove(toastId: number) {
      const index = this.toasts.findIndex(toast => toast.id === toastId)
      if (index > -1) {
        this.toasts.splice(index, 1)
      }
    }
  }
})
