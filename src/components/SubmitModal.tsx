import React, { useState } from 'react';
import { X, Upload, CheckCircle2 } from 'lucide-react';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitModal: React.FC<SubmitModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    type: 'vehicle_photo',
    category: 'aviation',
    title: '',
    registrationOrCode: '',
    operator: '',
    location: '',
    author: '',
    scaleModelBrand: '',
    scaleModelSku: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-7">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="text-lg font-bold text-white">
              提交成功！ / Submission Received
            </h3>
            <p className="text-xs text-slate-300">
              感谢您对翼轨图鉴档案馆的贡献，管理员审核后将同步收录至公开数据库。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <Upload className="w-4 h-4 text-sky-400" />
                <span>爱好者投稿与模玩登记 / Spotter & Collector Submission</span>
              </h3>
              <p className="text-slate-400 font-mono mt-0.5">
                支持实拍照片投稿、机号/车号打卡记录，以及补全各大模型厂商开模货号
              </p>
            </div>

            {/* Submission Type */}
            <div>
              <label className="block text-slate-300 font-medium mb-1.5">
                投稿类型 / Submission Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'vehicle_photo' })}
                  className={`py-2 px-3 rounded-xl border text-center font-medium transition-colors ${
                    formData.type === 'vehicle_photo'
                      ? 'bg-sky-950 text-sky-300 border-sky-600 font-bold'
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  📸 真实涂装实拍 / Livery Photo
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'model_record' })}
                  className={`py-2 px-3 rounded-xl border text-center font-medium transition-colors ${
                    formData.type === 'model_record'
                      ? 'bg-purple-950 text-purple-300 border-purple-600 font-bold'
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  📦 实体模型资料 / Scale Model
                </button>
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                分类 / Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-slate-800 text-slate-200 border border-slate-700 rounded-lg p-2.5"
              >
                <option value="aviation">✈️ 航空民航 / Aviation</option>
                <option value="railway">🚄 铁道机车车辆 / Railway</option>
              </select>
            </div>

            {/* Title / Vehicle model */}
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                载具机型/车型 / Model Name
              </label>
              <input
                type="text"
                required
                placeholder="例如：波音 787-9 / CR400AF-Z / 新干线 N700S"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-slate-800 text-slate-200 border border-slate-700 rounded-lg p-2.5 focus:outline-none focus:border-sky-500"
              />
            </div>

            {formData.type === 'model_record' ? (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    模型厂牌 / Brand (AV400, KATO...)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="如: Aviation400, TOMIX"
                    value={formData.scaleModelBrand}
                    onChange={(e) => setFormData({ ...formData, scaleModelBrand: e.target.value })}
                    className="w-full bg-slate-800 text-slate-200 border border-slate-700 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    模型货号 / SKU Code
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="如: AV4018 / 10-1784"
                    value={formData.scaleModelSku}
                    onChange={(e) => setFormData({ ...formData, scaleModelSku: e.target.value })}
                    className="w-full bg-slate-800 text-slate-200 border border-slate-700 rounded-lg p-2"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    机号 / 车组编号 Registration
                  </label>
                  <input
                    type="text"
                    placeholder="如: B-2047, CR400BF-0503"
                    value={formData.registrationOrCode}
                    onChange={(e) => setFormData({ ...formData, registrationOrCode: e.target.value })}
                    className="w-full bg-slate-800 text-slate-200 border border-slate-700 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    拍摄地点 / Airport / Station
                  </label>
                  <input
                    type="text"
                    placeholder="如: 北京首都 PEK / 东京站"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-800 text-slate-200 border border-slate-700 rounded-lg p-2"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                贡献者昵称 / Spotter Nickname
              </label>
              <input
                type="text"
                required
                placeholder="您的飞友/铁友签名"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full bg-slate-800 text-slate-200 border border-slate-700 rounded-lg p-2.5"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-slate-950 transition-all shadow-md"
              >
                确认提交审核 / Submit for Review
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
