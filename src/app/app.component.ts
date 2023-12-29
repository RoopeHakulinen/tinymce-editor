import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EditorComponent, EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';

// interface Sentence {
//   startId
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EditorModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  rawData = []

  content = `
  <h2>Meeting Structure and Nemo Project Update</h2>
<p>Dwane van der Sluis discussed the need to differentiate between formal and informal meetings, and how this could
  impact the meeting structure. He also updated the team on his progress with the Nemo project, mentioning some issues
  he encountered. Roope Hakulinen and Fatih Yildiz provided their insights and potential solutions to the problem.</p>

<h3>Action Items:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">Dwane to continue working
    on differentiating meeting structures (Dwane van der Sluis)
  </li>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">Dwane to troubleshoot
    Nemo project issues (Dwane van der Sluis)
  </li>
</ul>

<h3>Decisions:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">The team will
    differentiate between formal and informal meetings
  </li>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">Dwane will continue
    working on the Nemo project
  </li>
</ul>


<h2>Speaker Separation Project Discussion</h2>
<p>Roope Hakulinen and Dwane van der Sluis discussed the speaker separation project, which involves identifying who is
  speaking at what time and combining that with the Whisper output. They discussed the possibility of implementing this
  by relying on an additional file in the GCS bucket produced by Chauhan's Python script, and combining it in Nemo.</p>

<h3>Action Items:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">Start working on the
    speaker separation project (Dwane van der Sluis)
  </li>
</ul>

<h3>Decisions:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">The speaker separation
    project will be implemented using an additional file in the GCS bucket and combined in Nemo.
  </li>
</ul>


<h2>End-to-End Test Suite for System's Critical Parts</h2>
<p>The team discussed the end-to-end test suite designed to ensure the system's critical parts are functioning
  correctly. This includes creating a call, joining a call, and post-processing. The test suite can run on a developer's
  machine or in CI, and it checks various components of the system, such as color desynchronization, bot manager,
  backend frontend, and others.</p>

<h3>Action Items:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">Have a call to discuss
    different things to test (Roope Hakulinen)
  </li>
</ul>

<h3>Decisions:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">The team decided to use
    the end-to-end test suite as the ultimate limbo test for whether they can deploy something.
  </li>
</ul>


<h2>Integration Points and Testing Workflow</h2>
<p>Roope Hakulinen explains the integration points of their system, which includes Teams API, Google Calendar, and their
  own UI. He also discusses the purpose of the system, which is to replace manual testing and ensure the front and back
  end work together. He mentions potential future improvements, such as checking that the outline works as intended.
  Fatih Yildiz updates on his progress and Roope Hakulinen mentions that the on-call system is live in the States and
  France.</p>

<h3>Action Items:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">Update on progress (Fatih
    Yildiz)
  </li>
</ul>

<h3>Decisions:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">The system is designed to
    replace manual testing
  </li>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">The on-call system is now
    live in the States and France
  </li>
</ul>


<h2>Integration of Alerts and Error Handling</h2>
<p>The team discussed the integration of alerts in Grafana and Slack, and the handling of exceptions. They also talked
  about a specific error related to the 'join' button in Wisebot, which is likely due to a Zoom issue requiring user
  authentication. The team agreed on the need to add alerts for such issues.</p>

<h3>Action Items:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">Finish the code sentence
    (Deniz Uluğ)
  </li>
</ul>

<h3>Decisions:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">To integrate alerts that
    watch the dashboards in Grafana
  </li>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">To add alerts for issues
    like the 'join' button error in Wisebot
  </li>
</ul>


<h2>Task Management and Performance Improvements</h2>
<p>Roope Hakulinen discussed the importance of not rushing tasks and ensuring they are done correctly. He mentioned that
  all his tasks are now tracked in Notion and that the most critical task is finalizing the on-call system and
  end-to-end testing. He also talked about the performance improvements for the SSE, which included increasing the
  frequency and optimizing the query to make it six times faster. He also mentioned plans to separate two different SSE
  use cases to improve performance.</p>

<h3>Action Items:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">Finalize the on-call
    system and end-to-end testing (Roope Hakulinen)
  </li>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">Separate two different
    SSE use cases to improve performance (Roope Hakulinen)
  </li>
</ul>

<h3>Decisions:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">All tasks will now be
    tracked in Notion
  </li>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">Performance improvements
    for the SSE have been implemented
  </li>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">Plans to separate two
    different SSE use cases to improve performance
  </li>
</ul>


<h2>Cloud Run Environment Variables Issue</h2>
<p>Fatih Yildiz tested the cloud run environment variables and found that they do not work. Roope Hakulinen suggested
  checking the DevOps repo for the on-call webhook URL and advised against setting the environment variables in the GCP
  UI, recommending the use of Terraform instead.</p>

<h3>Action Items:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">Check the DevOps repo for
    the on-call webhook URL (Fatih Yildiz)
  </li>
</ul>

<h3>Decisions:</h3>
<ul>
  <li style="background-color: lightgray" data-sentence-start-id="123" data-sentence-end-id="123">Use Terraform for setting
    environment variables instead of GCP UI
  </li>
</ul>

  `
  setupEditor = (editor: any) => {
    editor.ui.registry.addButton('elaborate', {
      icon: 'zoom-in',
      tooltip: 'Elaborate',
      onAction: () => {
        const node = editor.selection.getNode();
        console.log(`Elaborating from ${node.dataset.sentenceStartId} to ${node.dataset.sentenceEndId}.`)
        node.innerHTML = 'Elaborated to be veeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeery, very, very long.......................................'
      }
    });

    editor.ui.registry.addButton('shorten', {
      icon: 'zoom-out',
      tooltip: 'Shorten',
      onAction: () => {
        const node = editor.selection.getNode();
        console.log(`Shortening from ${node.dataset.sentenceStartId} to ${node.dataset.sentenceEndId}.`)
        node.innerHTML = 'Shortened'
      }
    });

    editor.ui.registry.addButton('bulletize', {
      text: 'Bulletize',
      tooltip: 'Bulletize',
      onAction: () => {
        const node = editor.selection.getNode();
        console.log(`Bulletized.`)
        node.innerHTML = 'Not implemented yet'
      }
    });

    editor.ui.registry.addContextToolbar('textselection', {
      predicate: function (node: HTMLElement) {
        return !!node.closest('*[data-sentence-start-id]')
      },
      items: 'elaborate shorten | bulletize',
      position: 'selection',
      scope: 'node'
    });
  };

  shorten(): string {
    return ''
  }

  updateValue($event: any) {
    console.log($event)
  }
}
