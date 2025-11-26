"use client"

import React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { fileToBase64 } from "@/lib/file-to-base64"

interface FormData {
  fullName: string
  bms: string
  passportNumber: string
  birthDate: string
  email: string
  phone: string
  selectedNationality: string
  destinationCountry: string
  visaType: string
  documents: {
    passport: File | null
    passportPhoto: File | null
  }
}

const MAX_FILE_SIZE = 10 * 1024 * 1024

const translations = {
  en: {
    personalInfo: "Personal Information",
    documents: "Documents",
    fullName: "Full Name",
    fullNamePlaceholder: "John Doe",
    bms: "BMS",
    bmsPlaceholder: "e.g., BMS123456",
    passportNumber: "Passport Number",
    passportNumberPlaceholder: "ABC123456",
    birthDate: "Birth Date",
    email: "Email",
    emailPlaceholder: "john@example.com",
    phone: "Phone",
    phonePlaceholder: "+1234567890",
    destinationCountry: "Destination Country",
    destinationCountryHint: "Click a country in the grid above to auto-fill, or edit manually",
    visaType: "Travel Requirements",
    passportLabel: "Scanned Passport (Valid for at least 6 months)",
    passportPhotoLabel: "Personal Photo",
    passportPhotoInstructions:
      "Upload a clear passport-size photo (35x45mm). Ensure good lighting, neutral background, and face is centered. Accepted formats: JPG, JPEG, PNG. Max file size: 10 MB",
    uploaded: "Uploaded:",
    remove: "Remove",
    submit: "Submit Visa Request Application",
    submitting: "Submitting...",
    fileSizeError: "File exceeds 10 MB limit.",
    fixErrors: "Please fix file size errors before submitting.",
    successMessage: "Visa Request Application submitted successfully!",
    errorMessage: "Error submitting form:",
    required: "Required",
    chooseFile: "Choose file",
  },
  ja: {
    personalInfo: "個人情報",
    documents: "書類",
    fullName: "フルネーム",
    fullNamePlaceholder: "太郎 山田",
    bms: "BMS",
    bmsPlaceholder: "例：BMS123456",
    passportNumber: "パスポート番号",
    passportNumberPlaceholder: "ABC123456",
    birthDate: "生年月日",
    email: "メール",
    emailPlaceholder: "john@example.com",
    phone: "電話",
    phonePlaceholder: "+1234567890",
    destinationCountry: "目的地",
    destinationCountryHint: "上記のグリッドから国をクリックして自動入力するか、手動で編集してください",
    visaType: "旅行要件",
    passportLabel: "スキャンされたパスポート（最低6ヶ月間有効）",
    passportPhotoLabel: "個人写真",
    passportPhotoInstructions:
      "35x45mmのクリアなパスポートサイズの写真をアップロードしてください。照明が良く、背景が中立的で、顔が中央に配置されていることを確認してください。受け入れられた形式：JPG、JPEG、PNG。最大ファイルサイズ：10MB",
    uploaded: "アップロード済み：",
    remove: "削除",
    submit: "ビザリクエストアプリケーションを送信",
    submitting: "送信中...",
    fileSizeError: "ファイルが10MBの制限を超えています。",
    fixErrors: "提出前にファイルサイズエラーを修正してください。",
    successMessage: "ビザリクエストアプリケーションが正常に送信されました！",
    errorMessage: "フォーム送信エラー：",
    required: "必須",
    chooseFile: "ファイルを選択",
  },
  zh: {
    personalInfo: "个人信息",
    documents: "文件",
    fullName: "全名",
    fullNamePlaceholder: "张三",
    bms: "BMS",
    bmsPlaceholder: "例如：BMS123456",
    passportNumber: "护照号码",
    passportNumberPlaceholder: "ABC123456",
    birthDate: "出生日期",
    email: "电子邮件",
    emailPlaceholder: "john@example.com",
    phone: "电话",
    phonePlaceholder: "+1234567890",
    destinationCountry: "目的地国家",
    destinationCountryHint: "单击上面的网格中的国家/地区以自动填充或手动编辑",
    visaType: "旅行要求",
    passportLabel: "扫描护照（有效期至少6个月）",
    passportPhotoLabel: "个人照片",
    passportPhotoInstructions:
      "上传清晰的护照照片（35x45毫米）。确保照明良好、背景中立且脸部居中。接受的格式：JPG、JPEG、PNG。最大文件大小：10MB",
    uploaded: "已上传：",
    remove: "移除",
    submit: "提交签证申请表",
    submitting: "提交中...",
    fileSizeError: "文件超过10MB限制。",
    fixErrors: "提交前请修复文件大小错误。",
    successMessage: "签证申请表已成功提交！",
    errorMessage: "表单提交错误：",
    required: "必需的",
    chooseFile: "选择文件",
  },
}

export function VisaRequestForm({
  selectedNationality,
  selectedDestinationCountry,
  selectedVisaType,
  language = "en",
}: {
  selectedNationality: string
  selectedDestinationCountry: string | null
  selectedVisaType: string | null
  language?: "en" | "ja" | "zh"
}) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    bms: "",
    passportNumber: "",
    birthDate: "",
    email: "",
    phone: "",
    selectedNationality: selectedNationality,
    destinationCountry: selectedDestinationCountry || "",
    visaType: selectedVisaType || "",
    documents: {
      passport: null,
      passportPhoto: null,
    },
  })

  const [fileValidationError, setFileValidationError] = useState<string | null>(null)
  const [submitLoading, setSubmitLoading] = useState(false)

  const t = translations[language]

  React.useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      destinationCountry: selectedDestinationCountry || prev.destinationCountry,
      visaType: selectedVisaType || prev.visaType,
    }))
  }, [selectedDestinationCountry, selectedVisaType])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileUpload = (doc: keyof typeof formData.documents, file: File | null) => {
    setFileValidationError(null)

    if (file && file.size > MAX_FILE_SIZE) {
      const errorMsg = `${t.fileSizeError} ${(file.size / 1024 / 1024).toFixed(2)} MB`
      setFileValidationError(errorMsg)
      return
    }

    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [doc]: file,
      },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (fileValidationError) {
      alert(t.fixErrors)
      return
    }

    setSubmitLoading(true)

    try {
      let passportPhotoData = null
      let scannedPassportData = null

      // Convert files to base64 format for Power Automate
      if (formData.documents.passportPhoto) {
        const { base64, dataUrl } = await fileToBase64(formData.documents.passportPhoto)
        passportPhotoData = {
          fileName: formData.documents.passportPhoto.name,
          contentType: formData.documents.passportPhoto.type,
          content: dataUrl,
          contentBase64: base64,
        }
      }

      if (formData.documents.passport) {
        const { base64, dataUrl } = await fileToBase64(formData.documents.passport)
        scannedPassportData = {
          fileName: formData.documents.passport.name,
          contentType: formData.documents.passport.type,
          content: dataUrl,
          contentBase64: base64,
        }
      }

      // Build the payload matching Power Automate schema
      const payload = {
        requestType: "visa_request",
        nationality: formData.selectedNationality,
        fullName: formData.fullName,
        bms: formData.bms,
        birthdate: formData.birthDate,
        passportNumber: formData.passportNumber,
        email: formData.email,
        phone: formData.phone,
        destinationCountry: formData.destinationCountry,
        visaType: formData.visaType,
        submissionDate: new Date().toISOString(),
        ...(passportPhotoData && { passportPhoto: passportPhotoData }),
        ...(scannedPassportData && { scannedPassport: scannedPassportData }),
      }

      console.log("[v0] Sending Visa Request to Power Automate")

      // EDIT THIS: Replace with your actual Power Automate webhook URL
      const powerAutomateWebhookUrl =
        "https://d8855a0b6453e4089c94add3719cb2.9c.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/088bea7c06724d27b6ddadcbc0e7b70f/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=tdqOr2zf1DicdZSm6eDtugHOVH763hxWOjmD_eZoQmU"

      // POST as JSON with base64-encoded files
      const response = await fetch(powerAutomateWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.statusText} (${response.status})`)
      }

      alert(t.successMessage)

      // Reset form after successful submission
      setFormData({
        fullName: "",
        bms: "",
        passportNumber: "",
        birthDate: "",
        email: "",
        phone: "",
        selectedNationality: selectedNationality,
        destinationCountry: "",
        visaType: "",
        documents: {
          passport: null,
          passportPhoto: null,
        },
      })
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error"
      console.error("[v0] Submission error:", errorMessage)
      alert(`${t.errorMessage} ${errorMessage}`)
    } finally {
      setSubmitLoading(false)
    }
  }

  const DocumentUpload = ({
    id,
    label,
    file,
    onChange,
    instructions,
  }: {
    id: keyof typeof formData.documents
    label: string
    file: File | null
    onChange: (file: File | null) => void
    instructions?: string
  }) => (
    <div className="p-4 rounded-lg border border-border bg-card hover:bg-muted/30 transition-colors">
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      {instructions && <p className="text-xs text-muted-foreground mb-3">{instructions}</p>}
      {fileValidationError && <p className="text-xs text-destructive mb-2 font-medium">{fileValidationError}</p>}
      <div className="flex items-center gap-3">
        <input
          type="file"
          id={id}
          onChange={(e) => onChange(e.target.files?.[0] || null)}
          className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground cursor-pointer file:mr-2 file:py-2 file:px-3 file:rounded file:border-0 file:bg-primary file:text-primary-foreground file:cursor-pointer"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        />
        {file && (
          <button
            type="button"
            onClick={() => onChange(null)}
            className="px-3 py-2 text-sm bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors"
          >
            {t.remove}
          </button>
        )}
      </div>
      {file && (
        <div className="mt-2 p-2 bg-primary/10 rounded border border-primary/20">
          <p className="text-sm text-foreground">
            <span className="font-medium">{t.uploaded}</span> {file.name}
          </p>
          <p className="text-xs text-muted-foreground mt-1">{(file.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">{t.personalInfo}</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t.fullName} <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder={t.fullNamePlaceholder}
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.bms} <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                name="bms"
                value={formData.bms}
                onChange={handleInputChange}
                placeholder={t.bmsPlaceholder}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.passportNumber} <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleInputChange}
                placeholder={t.passportNumberPlaceholder}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.birthDate} <span className="text-destructive">*</span>
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.email} <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t.emailPlaceholder}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.phone} <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={t.phonePlaceholder}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t.destinationCountry} <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              name="destinationCountry"
              value={formData.destinationCountry}
              onChange={handleInputChange}
              placeholder={t.destinationCountry}
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="text-xs text-muted-foreground mt-1">{t.destinationCountryHint}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t.visaType} <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              name="visaType"
              value={formData.visaType}
              onChange={handleInputChange}
              readOnly
              className="w-full px-4 py-2 border border-border rounded-lg bg-muted text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">{t.documents}</h3>
        <div className="space-y-4">
          <DocumentUpload
            id="passport"
            label={`${t.passportLabel} ${t.required}`}
            file={formData.documents.passport}
            onChange={(file) => handleFileUpload("passport", file)}
          />
          <DocumentUpload
            id="passportPhoto"
            label={`${t.passportPhotoLabel} ${t.required}`}
            file={formData.documents.passportPhoto}
            onChange={(file) => handleFileUpload("passportPhoto", file)}
            instructions={t.passportPhotoInstructions}
          />
        </div>
      </Card>

      <button
        type="submit"
        disabled={submitLoading}
        className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitLoading ? t.submitting : t.submit}
      </button>
    </form>
  )
}
