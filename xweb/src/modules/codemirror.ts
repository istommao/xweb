
import { ref, defineComponent } from 'vue'
import CodeMirrorEditor from '@/components/CodeMirrorEditor.vue'
import { Get, HttpResultResponse, Post } from '@/utils/requests';

export default defineComponent({
  components: {
    CodeMirrorEditor
  },
  setup() {
    const editorMode = "javascript";
    const CodeData = ref('{}');

    const DataUrl = ref('https://api.apiopen.top/getJoke?page=1&count=2&type=video');

    interface ResponseDemo {
        sid: string;
        text: string;
        type: string;
        thumbnail: string;
        video: string;
        images: string[] | null;
    }

    const GetResponse = async (url: string): Promise<HttpResultResponse<ResponseDemo>> => Get(url);

    const doHttpRequest = async () => {
      const { data: response } = await GetResponse(DataUrl.value);
      CodeData.value = JSON.stringify(response.result);
    };
    return { editorMode, CodeData, DataUrl, doHttpRequest };
  }
});