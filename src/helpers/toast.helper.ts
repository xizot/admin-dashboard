import { toast } from 'react-toastify'

export class ToastHelper {
  static Success(message: string) {
    toast.success(message)
  }
  static Error(message: string) {
    toast.error(message)
  }
  static Warning(message: string) {
    toast.warning(message)
  }
  static Info(message: string) {
    toast.info(message)
  }
}